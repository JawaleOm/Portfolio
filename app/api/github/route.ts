import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache on server edge for 1 hour

export async function GET() {
  try {
    const username = "JawaleOm";
    const githubToken = process.env.GITHUB_TOKEN;

    // 1. Fetch User Info from GitHub REST API
    const userHeaders: HeadersInit = {
      "User-Agent": "OmJawale-Portfolio",
    };
    if (githubToken) {
      userHeaders["Authorization"] = `Bearer ${githubToken}`;
    }

    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: userHeaders,
      next: { revalidate: 3600 },
    });

    if (!userRes.ok) {
      console.warn(`GitHub REST API returned status: ${userRes.status}`);
    }

    const userData = userRes.ok
      ? await userRes.json()
      : {
          login: username,
          name: "Om Jawale",
          public_repos: 8,
          followers: 0,
          avatar_url: "https://avatars.githubusercontent.com/u/201366683?v=4",
        };

    // 2. Fetch Contributions Calendar
    let totalContributions = 0;
    let days: { date: string; count: number; level: number }[] = [];
    let hasRecentActivity = false;

    try {
      const contribRes = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        {
          headers: { "User-Agent": "OmJawale-Portfolio" },
          next: { revalidate: 3600 },
        }
      );

      if (contribRes.ok) {
        const contribData = await contribRes.json();
        totalContributions = contribData.total?.lastYear || 0;
        days = contribData.contributions || [];

        // Check if there was activity in the last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const cutoffStr = thirtyDaysAgo.toISOString().split("T")[0];

        hasRecentActivity = days.some((d) => d.date >= cutoffStr && d.count > 0);
      }
    } catch (e) {
      console.error("Error fetching contributions heatmap:", e);
    }

    return NextResponse.json({
      success: true,
      user: {
        login: userData.login,
        name: userData.name || "Om Jawale",
        public_repos: userData.public_repos,
        followers: userData.followers,
        avatar_url: userData.avatar_url,
      },
      contributions: {
        total: totalContributions,
        days: days,
        hasRecentActivity: hasRecentActivity,
      },
      lastUpdated: new Date().toISOString(),
    });
  } catch (err) {
    console.error("GitHub API handler error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Activity data unavailable right now",
      },
      { status: 200 }
    );
  }
}

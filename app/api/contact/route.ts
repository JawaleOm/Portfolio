import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiting map: IP -> timestamp array
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please wait a few minutes before trying again or email directly.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // 1. Honeypot check (Anti-spam)
    if (honeypot && String(honeypot).trim().length > 0) {
      // Bot detected, silently reject without raising suspicion
      return NextResponse.json({ success: true, message: "Message sent successfully" });
    }

    // 2. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a message subject." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a detailed message (at least 10 characters)." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_TO_EMAIL || "omjawale23@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;

    // Check if sending provider is configured
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact Form <onboarding@resend.dev>",
          to: recipientEmail,
          reply_to: email.trim(),
          subject: `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`,
          text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          {
            success: false,
            error: "Failed to dispatch email via Resend. Please reach out directly to omjawale23@gmail.com.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been sent directly to Om.",
      });
    }

    if (web3FormsKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: name.trim(),
          email: email.trim(),
          subject: `[Portfolio] ${subject.trim()}`,
          message: message.trim(),
          to: recipientEmail,
        }),
      });

      if (!res.ok) {
        return NextResponse.json(
          {
            success: false,
            error: "Failed to dispatch email via Web3Forms. Please email omjawale23@gmail.com directly.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been sent directly to Om.",
      });
    }

    // Honest "Not Configured" response when no external provider credentials exist
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${subject.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Hi Om,\n\nMy name is ${name.trim()} (${email.trim()}).\n\n${message.trim()}\n\nBest regards,\n${name.trim()}`
    );
    const mailtoUrl = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    return NextResponse.json(
      {
        success: false,
        notConfigured: true,
        message:
          "Form delivery service is not configured with an API key. Please click below to email Om directly via your mail client.",
        mailtoUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact handler error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please reach out directly via omjawale23@gmail.com." },
      { status: 500 }
    );
  }
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0A0A0A",
          card: "#121212",
          cardHover: "#161616",
          border: "#262626",
          borderHover: "#383838",
        },
        lime: {
          DEFAULT: "#C8FF00",
          hover: "#b5e600",
          muted: "rgba(200, 255, 0, 0.12)",
          glow: "rgba(200, 255, 0, 0.25)",
        },
        orange: {
          tag: "#FF5A1F",
          tagBg: "rgba(255, 90, 31, 0.12)",
        },
        brand: {
          text: "#F5F5F5",
          muted: "#A0A0A0",
          subtle: "#666666",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tightest: "-0.06em",
        widestMono: "0.15em",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

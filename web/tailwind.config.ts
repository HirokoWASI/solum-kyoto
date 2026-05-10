import type { Config } from "tailwindcss";

// ブランドガイドラインから抽出したデザイントークン
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F0EDE6",
        "warm-off": "#E8E3DA",
        shironeri: "#EDE8DF",
        charcoal: "#3A3530",
        mid: "#6E6560",
        "light-line": "#D5CECC",
        "ink-faint": "rgba(58,53,48,0.07)",
        chigusa: {
          DEFAULT: "#7A9E8E",
          light: "#A8C4B7",
          dark: "#5A7E6E",
          bg: "rgba(122,158,142,0.08)",
        },
        earth: {
          DEFAULT: "#B89C84",
          dark: "#8A6E56",
          light: "#D4C8AE",
          bg: "rgba(184,156,132,0.08)",
        },
        "accent-red": "#C0392B",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "Noto Sans JP", "sans-serif"],
        serif: ["var(--font-shippori)", "Shippori Mincho", "serif"],
        latin: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
      },
      letterSpacing: {
        widest: "0.18em",
        ultra: "0.32em",
      },
      maxWidth: {
        content: "1320px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1.0)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.9s ease forwards",
        kenburns: "kenburns 18s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;

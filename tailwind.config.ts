import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "deep-navy": "#060B1D",
        "arcade-blue": "#2A6CFF",
        "neon-cyan": "#5CF2FF",
        "soft-slate": "#94A3B8",
        "panel": "rgba(12, 21, 45, 0.7)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(92, 242, 255, 0.25)",
        deep: "0 25px 60px rgba(6, 11, 29, 0.55)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top, rgba(42, 108, 255, 0.35), transparent 55%), radial-gradient(circle at 20% 20%, rgba(92, 242, 255, 0.2), transparent 45%)",
        "glass-panel": "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))"
      }
    }
  },
  plugins: []
};

export default config;

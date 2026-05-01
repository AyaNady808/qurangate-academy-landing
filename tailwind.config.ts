import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Islamic soft palette — change these to retheme the whole site
        sand: {
          50: "#FBF8F1",
          100: "#F5EFE0",
          200: "#EBDFC2",
          300: "#DCC99A",
        },
        emerald: {
          50: "#EEF7F2",
          100: "#D6ECDF",
          400: "#3FA06D",
          500: "#2F7A52",
          600: "#256241",
          700: "#1C4B32",
          800: "#143824",
        },
        gold: {
          300: "#E2C490",
          400: "#D4AF6A",
          500: "#B8924A",
        },
        ink: {
          900: "#1A1F1B",
          700: "#3A4239",
          500: "#6B7268",
        },
        // Dark-mode surfaces — emerald-tinted near-blacks
        night: {
          950: "#070D0A", // body
          900: "#0B1410", // primary surface
          800: "#11201A", // cards
          700: "#16291F", // elevated
          600: "#1E342A", // borders
          500: "#2A4537", // hairlines / muted
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "ui-serif", "serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(20, 56, 36, 0.08)",
        "soft-dark": "0 8px 30px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;

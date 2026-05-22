import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        roast: {
          950: "#0a0805",
          900: "#0c0a08",
          800: "#14100b",
          700: "#1d1710",
          600: "#291f15",
          500: "#3a2c1d",
        },
        amber: {
          // tea / coffee / caramel warmth
          600: "#b8742f",
          500: "#d99a4e",
          400: "#e8b56e",
          300: "#f2cf96",
        },
        teaj: {
          // tea jade
          600: "#4f8a6b",
          500: "#6fae8e",
          400: "#8fcaa6",
        },
        wine: {
          600: "#8e2f47",
          500: "#b04059",
          400: "#cb6177",
        },
        glass: {
          // cool water / glass cyan
          600: "#3f93a8",
          500: "#5fb6c9",
          400: "#8fd4e0",
        },
        foam: {
          50: "#f6f0e3",
          100: "#f2ead9",
          300: "#cdc1a8",
          500: "#9a8e76",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
        serif: ['"Spectral"', "ui-serif", "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        zh: ['"Noto Serif SC"', "serif"],
      },
      boxShadow: {
        glasscard: "inset 0 1px 0 rgba(242,234,217,0.08), 0 18px 50px -24px rgba(0,0,0,0.85)",
        warm: "0 0 40px -10px rgba(217,154,78,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;

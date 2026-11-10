import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#102B50",
          deep: "#08264A",
          dark: "#051A33",
          light: "#173E73",
        },
        blue: {
          brand: "#2476DB",
          light: "#EBF3FC",
          glow: "#3B82F6",
        },
        teal: {
          brand: "#24B8A5",
          light: "#E6F8F5",
        },
        surface: {
          light: "#F4F7FB",
          card: "#FFFFFF",
          muted: "#F8FAFC",
        },
        text: {
          primary: "#142B4A",
          secondary: "#64748B",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(16, 43, 80, 0.08)",
        card: "0 10px 30px -4px rgba(16, 43, 80, 0.06)",
        float: "0 20px 40px -10px rgba(16, 43, 80, 0.12)",
        glow: "0 0 25px rgba(36, 118, 219, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;


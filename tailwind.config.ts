import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1", // Primary brand indigo
          600: "#4F46E5", // Hover
          700: "#4338CA",
          800: "#3730A3", // Deep indigo
          900: "#312E81",
          950: "#1E1B4B",
        },
        darkBg: "#0B0F1A",
        darkSurface: "#111827",
        darkCard: "#151D2F",
        darkBorder: "#273244",
        lightBg: "#F8FAFC",
        lightSurface: "#FFFFFF",
        lightBorder: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "brand-glow": "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.25)',
        'glow-md': '0 0 30px rgba(99, 102, 241, 0.35)',
        'glow-lg': '0 0 50px rgba(99, 102, 241, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

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
        brand: {
          green: "#83AB49",
          greenHover: "#71953B",
          darkGreen: "#4E672D",
          lightLime: "#C9D997",
          softLime: "#EEF4DF",
          textMain: "#243126",
          textMuted: "#5F685D",
          border: "#E3E9DA",
          bgAlt: "#F7F9F3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

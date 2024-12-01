import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#087F4D",
        tertiary: "#37462D",
        logo: "#097E4D"
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        foundation: "#FAFAFA",
        primary: "#ED7950",
        muted: "#F5F5F5",
        stroke: "#D4D4D8",
        black: "#27272A",
        dark: "#000000",
        gray: "#94959C",
        stone: "#27272A",
        blue: "#5069ED",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        title: ["var(--font-orbitron)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-blue",
    "bg-primary",
    "text-white",
    "hover:text-blue",
    "hover:text-primary",
    "text-blue",
    "text-primary",
    "from-[#0085FF]/5",
    "to-[#00D1FF]/5",
    "from-[#FF00F5]/5",
    "to-[#FF2E00]/5",
    "from-[#0500FF]/5",
    "to-[#A500DE]/5",
    "from-[#E4B12E]/20",
    "to-[#ED7950]/20",
    "from-[#03A300]/5",
    "to-[#82E700]/5",
  ],
};
export default config;

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
        primary: "#ED7950",
        background: "#FAFAFA",
        stroke: "#D4D4D8",
        black: "#27272A",
        gray: "#94959C",
        stone: "#6C757D",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        title: ["var(--font-orbitron)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
  safelist: [
    "from-[#0085FF]/10",
    "to-[#00D1FF]/10",
    "from-[#FF00F5]/10",
    "to-[#FF2E00]/10",
    "from-[#0500FF]/10",
    "to-[#A500DE]/10",
    "from-[#E4B12E]/20",
    "to-[#ED7950]/20",
    "from-[#03A300]/10",
    "to-[#82E700]/10",
  ],
};
export default config;

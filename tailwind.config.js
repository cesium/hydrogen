/** @type {import('tailwindcss').Config} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

module.exports = {
  nextConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: "var(--inter-font)",
      orbitron: "var(--orbitron-font)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cesium: {
          100: "#FFEDE7",
          200: "#FBE4DC",
          300: "#F9D7CA",
          400: "#F7C9B9",
          500: "#F5BCA7",
          600: "#F3AE95",
          700: "#F1A184",
          800: "#ED8661",
          900: "#ED7950",
        },
        background: "EDE9E8",
        "light-gray": "#D9D9D9",
        "dark-gray": "#353335",
      },
    },
  },
  plugins: [],
};

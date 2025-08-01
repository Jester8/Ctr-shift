module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          300: "#2DD4BF",
          400: "#2BC9B5"
        },
        purple: {
          500: "#7C3AED",
          800: "#5B21B6",
        },
      },
      fontFamily: {
        heading: ["Archivo", "sans-serif"],
        body: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IransansThin: "Iransans-thin",
        Iransansblack: "Iransans-Black",
        IransansBold: "Iransans-Bold",
        IransansMD: "Iransans-MD",
      },
    },
  },
  plugins: [],
};

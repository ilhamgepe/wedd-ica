/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackEditor: "#141517",
      },
      fontFamily: {
        Athalita: ['Athalita', 'cursive'],
      }
    },
  },
  plugins: [],
}

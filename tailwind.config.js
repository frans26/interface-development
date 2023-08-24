/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "strong-red": "#cf1430",
        "dark-grey": "#9e9e9e",
        "light-grey": "#dadada"
      },
    },
  },
  plugins: [],
}


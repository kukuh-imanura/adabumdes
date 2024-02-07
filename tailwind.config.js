/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'light-primary': '#eeeeee',
      'light-secondary': '#dddddd',
      'dark-primary': '#111111',
      'dark-secondary': '#222222',
      'brand-primary': '#00ffff',
      'brand-secondary': '#ff0000',
    },
    extend: {
      height: {
        '25vh': '25vh',
        '50vh': '50vh',
        '75vh': '75vh',
      },
    },
  },
  plugins: [],
}
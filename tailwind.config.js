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
        '1/4-screen': '25vh',
        '1/2-screen': '50vh',
        '3/4-screen': '75vh',
      },
    },
  },
  plugins: [],
}
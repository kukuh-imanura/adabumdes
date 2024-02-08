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
    fontSize: {
      'h1': '32px',
      'h2': '24px',
      'h3': '18.72px',
      'h4': '16px',
      'h5': '13.28px',
      'h6': '10.72px',
    },
    extend: {
      height: {
        '25vh': '25vh',
        '50vh': '50vh',
        '75vh': '75vh',
      },
      spacing: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '5/5': '100%',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
        
      }
    },
  },
  plugins: [],
}
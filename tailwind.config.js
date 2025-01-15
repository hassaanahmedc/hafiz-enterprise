/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Main HTML file
    './assets/html/**/*.html', // All HTML files in assets/html
    './assets/js/**/*.js', // JavaScript files (for dynamic class usage)
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
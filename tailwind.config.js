/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",              // root HTML files
    "./pages/**/*.html",     // all HTML files inside /pages
    "./assets/js/**/*.js"    
  ],
  theme: {
    extend: {
      fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      Poppins : ['Poppins','sans-serif']
    },
    },
  },
  plugins: [],
}


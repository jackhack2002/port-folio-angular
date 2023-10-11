/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage:{
        'background':"url('/assets/img/portfoliobg.jpg')"
      },
      
    },
  },
  plugins: [],
}


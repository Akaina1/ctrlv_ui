/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',         
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      //custom breakpoints
      'navbar': '1160px', // edit this breakpoint if you change navbar for responsiveness
      'fold': '281px',
    },
    extend: {},
  },
  plugins: [],
}
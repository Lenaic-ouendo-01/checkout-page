/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'body' : "Montserrat"
      },
      
      screens: {
        dm: '900px',
        ms: '344px',
        bt: '402px'
      }
    },

  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        mainPurple:'#A445ED',
        subDesc:'#757575'
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
}

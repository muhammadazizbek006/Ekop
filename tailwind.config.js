/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'head':'#203686 ',
        'gray':'#70798E',
        'sariq':'#FFED32',
        'input':'#DDE1E6',
        'special':'#20368633',
        'yashil':'#4ADD47',
        'kok':'#2AABEE',
        'week':'#1877F2',
        'foot':'#F4F7FB'
      },

      backgroundImage: {
        'offer': "url('/src/imgs/BusinessOffer/offerbg.png')",
        'Subscribe': "url('/src/imgs/Subscribe/bg.png')",


      },
      fontSize:{
        '40':'40px',
        '50':'50px'

      },
      lineHeight:{
        '40':'40px',
        '54':'54px',
        '50':'50px'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      screens:{
        '524':'524px',
        '858':'858'
      }
    },
  },
  plugins: [],
}
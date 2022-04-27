const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: colors.red,
      yellow: {
        gold: 'D5B942',
        light: '#EDFB5F',
        default: '#FFC817',
        dark: '#F59300',
      },
      orange: {
        dark: '#CC4E00',
      },
      gray: {
        darkest: '#1B1B1B',
        dark: '#373737',
        default: '#c0ccda',
        light: '#C4C4C4',
        lightest: '#f9fafc',
      },
      white: '#fff',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    colors: {
      ...colors
    },
    extend: {
      colors: {
        gray: "#555e7b"
      },
    },
  },
  variants: {},
  plugins: [],
}

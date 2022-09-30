module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        md: '1rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '6rem',
      },
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ],
}

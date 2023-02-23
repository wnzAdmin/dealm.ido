module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2lg": "1152px",
      // => @media (min-width: 1152px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "1rem",
        lg: "3rem",
        xl: "3rem",
        "2xl": "6rem",
      },
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animation-delay")],
};

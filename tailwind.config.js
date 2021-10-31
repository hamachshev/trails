module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      dropShadow: {
        active: "0 35px 35px rgb(15, 84, 239, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

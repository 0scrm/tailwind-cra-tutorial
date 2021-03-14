module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.ts", "./src/**/*.tsx"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

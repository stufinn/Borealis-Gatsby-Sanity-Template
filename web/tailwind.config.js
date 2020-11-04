module.exports = {
  purge: [
    // look in all subdirectories of src directory
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        card: "minmax(150px, 450px) auto",
      },
    },
  },
  variants: {},
  plugins: [],
}

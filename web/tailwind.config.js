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
  variants: {
    borderWidth: ["responsive", "first"],
    display: ["responsive", "hover", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover", "visited"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
}

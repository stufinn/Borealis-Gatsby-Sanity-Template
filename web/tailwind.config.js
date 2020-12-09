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
      boxShadow: {
        extra: "8px 8px 0 0 green",
      },
    },

    scale: {
      "0": "0",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5",
      "200": "2",
    },
  },
  variants: {
    borderWidth: ["responsive", "first"],
    display: ["responsive", "hover", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover", "visited"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
}

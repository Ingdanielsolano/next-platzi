const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [],
};

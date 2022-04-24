const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./layout/**/*.{html,js,jsx}",
    "./common/**/*.{html,js,jsx}",
  ],
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        "body-dark": "#040D12",
        "light-green": "#04AD8E",
        "dark-green": "#04AD8E",
      },

      fontFamily: {
        roboto: "Roboto, sans-serif;",
      },
    },
  },
  plugins: [],
};

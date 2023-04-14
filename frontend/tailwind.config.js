/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        playfair: ["playfair, montserrat, sans-serif"],
        montserrat: ["montserrat, playfair, sans-serif"],
      },
      blur: {
        xs: "1.3px",
      },
    },
    colors: {
      primary: "#264653",
      secondary: "#FAF9F0",
    },
  },
  plugins: [],
};

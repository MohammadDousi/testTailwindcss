/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        att: "repeat(5,3rem)",
      },

      keyframes: {
        animloader: {
          "0%": {
            left: "0",
            transform: "translateX(-100%)",
            backgroundColor: "#38bdf8",
          },
          "100%": {
            left: "100%",
            transform: "translateX(0%)",
            backgroundColor: "#0ea5e9",
          },
        },
      },
      animation: {
        animloader: "animloader 2s linear infinite",
      },
    },
  },
  plugins: [],
};

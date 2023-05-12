const { keyframes } = require("styled-components");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffd000",
      },
      animation: {
        spawn: "spawnKeyFrames  0.5s ease-in-out",
      },
      keyframes: {
        spawnKeyFrames: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

const colors = require('./src/theme/assets/colors.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        PrimaryMedium: ["PrimaryMedium"],
        PrimaryText: ["PrimaryText"],
      },
      colors: colors,
    },
  },
  plugins: []
}
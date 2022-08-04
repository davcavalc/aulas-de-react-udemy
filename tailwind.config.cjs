/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
 theme: {
  backgroundImage: {
   banner: "url('./src/assets/kameron.jpg')",
  },
  extend: {},
 },
 plugins: [require("daisyui")],
};

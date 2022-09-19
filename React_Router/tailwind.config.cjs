/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   spacing: {
    1.5: "0 10px",
   },
  },
 },
 plugins: [],
};

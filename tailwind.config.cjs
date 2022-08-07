/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		spacing: {
			1: "2px",
		},
		extend: {
			colors: {
				react: "#5ed3f4",
			},
		},
	},
	plugins: [require("daisyui")],
};

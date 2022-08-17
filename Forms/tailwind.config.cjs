/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		backgroundImage: {
			'wood' : "url('./public/wood.jpg')",
		},
		extend: {},
	},
	plugins: [],
};

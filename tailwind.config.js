/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/index.jsx",
		"/src/styles/style.css",
	],
	theme: {
		colors: {
			blue: "#1fb6ff",
			red: "red",
			pink: "#ff49db",
			orange: "#ff7849",
			green: "#13ce66",
			"gray-dark": "#273444",
			gray: "#8492a6",
			"gray-light": "#d3dce6",
			"main-header": "#495C60",
			"main-background": "#DED6C9",
			"custom-grey-color": "#D9D9D9",
		},
		extend: {
			padding: {
				"custom-y": "20px",
				"custom-x": "20px",
			},
			fontSize: {
				"content-header": "48px",
			},
		},
	},
	plugins: [],
};

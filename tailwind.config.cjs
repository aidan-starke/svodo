/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				fira: ["Fira Code", "monospace"],
			},
			colors: {
				hero: "pink-500",
				light: "pink-200",
				dark: "pink-600",
			},
		},
	},
	plugins: [],
};

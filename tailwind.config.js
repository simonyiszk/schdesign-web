const defaultTheme = require("tailwindcss/defaultTheme");
const aspectRatio = require("@tailwindcss/aspect-ratio");

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,scss,mdx}"],
	theme: {
		extend: {
			transitionTimingFunction: {
				DEFAULT: defaultTheme.transitionTimingFunction.out,
			},
			colors: {
				primary: {
					DEFAULT: "#F8485E",
				},
			},
			fontFamily: {
				schdesign: "schdesign",
				RobotoMono: [
					"Roboto Mono",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					'"Segoe UI"',
					"Roboto",
				],
				Montserrat: [
					"Montserrat",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					'"Segoe UI"',
					"Roboto",
				],
			},
			boxShadow: {
				darker:
					"0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)",
			},
			textShadow: {
				sharp: "2px 2px 2px rgba(0, 0, 0, 0.5)",
			},
		},
	},
	variants: {
		extend: {},
	},
	corePlugins: {
		// animation: false,
	},
	plugins: [aspectRatio],
};

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
	},
});

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["images.ctfassets.net"],
	},
	async redirects() {
		return [
			{
				source: "/drive",
				destination:
					"https://drive.google.com/drive/folders/0B8rKwHW6MJ1QeEFVVXc5eGVzUzA?resourcekey=0-K2BJe0U3Om4y6dWje2ngaw&usp=sharing",
				permanent: true,
			},
			{
				source: "/trello",
				destination: "https://trello.com/b/GZ6uUIqE/schdesign-2023-tavasz",
				permanent: false,
			},
			{
				source: "/figma",
				destination:
					"https://www.figma.com/files/team/796103961140349650/schdesign",
				permanent: true,
			},
			{
				source: "/logotar",
				destination: "https://logotar.schdesign.hu",
				permanent: true,
			},
			{
				source: "/proj",
				destination:
					"https://drive.google.com/drive/folders/0B8rKwHW6MJ1QVEd5N240dlJSU2s?resourcekey=0-ws1VyicbG7V-9EgQ4Jm1-g&usp=sharing",
				permanent: true,
			},
			{
				source: "/919",
				destination:
					"https://calendar.google.com/calendar/embed?src=jidr5qaro7d4l7mfvf83d33o90@group.calendar.google.com&ctz=Europe/Budapest&pli=1",
				permanent: true,
			},
			{
				source: "/simonyiarculat",
				destination:
					"https://drive.google.com/drive/folders/0B5vSboSK4bYaMDd2MVB1U2NhNTA?resourcekey=0-URP8EjUTpjZ6H5kqCzL5pQ&usp=sharing",
				permanent: true,
			},
			{
				source: "/roadmap",
				destination: "https://roadmap.schdesign.hu",
				permanent: true,
			},
			{
				source: "/szmsz",
				destination:
					"https://drive.google.com/file/d/1Jpa6VdPs5PPQm16w6aOW_00RuA8cxYST/view?usp=sharing",
				permanent: true,
			},
			{
				source: "/games",
				destination:
					"https://drive.google.com/drive/folders/1mW8Aaph4jBHZbf9EcEAsebmYTgP_yrxo?usp=sharing",
				permanent: true,
			},
			{
				source: "/konf",
				destination:
					"https://trello.com/b/mbeiTk9j/xx-simonyi-konferencia-arculat",
				permanent: true,
			},
		];
	},
};

module.exports = withMDX({
	pageExtensions: ["tsx", "mdx", "ts"],
	...nextConfig,
});

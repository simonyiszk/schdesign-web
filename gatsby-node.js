/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			plugins: [new TsconfigPathsPlugin()],
		},
	});
};

exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
	createRedirect({
		fromPath: "/drive",
		toPath:
			"https://drive.google.com/drive/folders/0B8rKwHW6MJ1QeEFVVXc5eGVzUzA?resourcekey=0-K2BJe0U3Om4y6dWje2ngaw&usp=sharing",
		isPermanent: true,
	});
	createRedirect({
		fromPath: "/trello",
		toPath: "https://trello.com/b/NIyUgX96/schdesign-2022-tavasz",
		isPermanent: false,
	});
	createRedirect({
		fromPath: "/figma",
		toPath: "https://www.figma.com/files/team/796103961140349650/schdesign",
		isPermanent: true,
	});
	createRedirect({
		fromPath: "/logotar",
		toPath: "https://logotar.schdesign.hu",
		isPermanent: true,
	});
	createRedirect({
		fromPath: "/proj",
		toPath:
			"https://drive.google.com/drive/folders/0B8rKwHW6MJ1QVEd5N240dlJSU2s?resourcekey=0-ws1VyicbG7V-9EgQ4Jm1-g&usp=sharing",
		isPermanent: true,
	});
	createRedirect({
		fromPath: "/919",
		toPath:
			"https://calendar.google.com/calendar/embed?src=jidr5qaro7d4l7mfvf83d33o90@group.calendar.google.com&ctz=Europe/Budapest&pli=1",
		isPermanent: true,
	});
	createRedirect({
		fromPath: "/simonyiarculat",
		toPath:
			"https://drive.google.com/drive/folders/0B5vSboSK4bYaMDd2MVB1U2NhNTA?resourcekey=0-URP8EjUTpjZ6H5kqCzL5pQ&usp=sharing",
		isPermanent: true,
	});
	createRedirect({
		fromPath: "/roadmap",
		toPath: "https://roadmap.schdesign.hu",
		isPermanent: true,
	});
	createRedirect({
		fromPath: "/szmsz",
		toPath:
			"https://drive.google.com/file/d/1Jpa6VdPs5PPQm16w6aOW_00RuA8cxYST/view?usp=sharing",
		isPermanent: true,
	});
	// Create pages here
};

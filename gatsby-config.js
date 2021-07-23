const dotenv = require("dotenv");

dotenv.config({ path: "./.env.local" });

module.exports = {
	siteMetadata: {
		title: `schdesign`,
		description: `schdesign`,
		author: `@schdesign`,
		siteUrl: `https://schdesign.hu/`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-typegen`,
			options: {
				outputPath: `src/@types/__generated__/gatsby-types.ts`,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`],
					placeholder: `blurred`,
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `schdesign`,
				short_name: `schdesign`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-mdx`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `gv4jvhx1s5r7`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				// host: `preview.contentful.com`,
			},
		},
		`gatsby-plugin-gatsby-cloud`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-tsconfig-paths`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};

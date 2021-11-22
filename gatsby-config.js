const dotenv = require("dotenv");

dotenv.config({ path: "./.env.local" });
dotenv.config({ path: "./.env.development.local" });

const siteMetadata = {
	title: `schdesign`,
	description: `Az schdesign a Simonyi Károly Szakkollégium kreatív alkotóműhelye.`,
	author: `@schdesign`,
	siteUrl: `https://schdesign.hu`,
	image: `/preview.png`,
	favicon: `/favicon.png`,
};

module.exports = {
	siteMetadata,
	plugins: [
		/** Contentful types */
		{
			resolve: `gatsby-plugin-typegen`,
			options: {
				outputPath: `src/@types/__generated__/gatsby-types.ts`,
			},
		},

		/** React Helmet */
		`gatsby-plugin-react-helmet`,

		/** Preload images */
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},

		/** Optimize images */
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

		/** Build site manifest */
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `schdesign`,
				short_name: `schdesign`,
				start_url: `/`,
				background_color: `#0F172A`,
				theme_color: `#F8485E`,
				display: `minimal-ui`,
				icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
			},
		},

		/** Build sitemap */
		{
			resolve: "gatsby-plugin-sitemap",
			options: {
				query: `
				{
					allSitePage {
						nodes	{
							path
						}
					}
				}
				`,
				resolveSiteUrl: () => siteMetadata.siteUrl,
				resolvePages: ({ allSitePage: { nodes: allPages } }) => {
					return allPages.map((page) => {
						return { ...page };
					});
				},
				serialize: ({ path, modifiedGmt }) => {
					return {
						url: path,
					};
				},
			},
		},

		/** MDX support */
		`gatsby-plugin-mdx`,

		/** Contentful integration */
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `gv4jvhx1s5r7`,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				host: process.env.CONTENTFUL_HOST,
			},
		},

		/** Gatsby cloud hosting options */
		{
			resolve: `gatsby-plugin-gatsby-cloud`,
			options: {
				headers: {
					"/*":["X-Frame-Options: DENY"],
					"/scharculat": ["X-Frame-Options: SAMEORIGIN"],
					"/scharculat/": ["X-Frame-Options: SAMEORIGIN"],
				},
				allPageHeaders: [
					"X-XSS-Protection: 1; mode=block",
					"X-Content-Type-Options: nosniff",
					"Referrer-Policy: same-origin",
				],
				mergeSecurityHeaders: false,
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-tsconfig-paths`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,

		/** Redirects in gatsby-node.js */
		`gatsby-plugin-meta-redirect`, // make sure to put last in the array
	],
};

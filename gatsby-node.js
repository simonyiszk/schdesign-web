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

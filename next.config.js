const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
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
		deviceSizes: [375],
		imageSizes: [40, 48, 64, 390, 520],
	},
	experimental: {
		newNextLinkBehavior: true,
	},
	swcMinify: true,
};

module.exports = withPlugins(
	[
		[withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
		[
			withMDX,
			{
				pageExtensions: ["tsx", "mdx", "ts"],
			},
		],
	],
	nextConfig,
);

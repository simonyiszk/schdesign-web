/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

export type SeoProps = {
	description?: string;
	lang?: string;
	title: string;
	meta?: { name: string; content: string }[];
};

export function Seo({ description, lang = "hu", meta = [], title }: SeoProps) {
	const { site }: GatsbyTypes.Query = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						siteUrl
						title
						description
						author
						image
						favicon
					}
				}
			}
		`,
	);

	const metaDescription =
		description ?? site?.siteMetadata?.description ?? "schdesign";
	const defaultTitle = site?.siteMetadata?.title
		? `${site.siteMetadata.title} | %s`
		: "schdesign";
	const previewImage =
		site?.siteMetadata?.image && site?.siteMetadata?.siteUrl
			? `${site?.siteMetadata?.siteUrl}${site?.siteMetadata?.image}`
			: "https://schdesign.hu/preview.png";

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={defaultTitle}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:creator`,
					content: site?.siteMetadata?.author || ``,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				{
					name: `twitter:image`,
					content: previewImage,
				},
				{
					name: `og:image`,
					content: previewImage,
				},
				{
					name: `thumbnail`,
					content: previewImage,
				},
			].concat(meta)}
		/>
	);
}

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
	meta: (
		| {
				name: string;
				content: any;
				property?: undefined;
		  }
		| {
				property: string;
				content: any;
				name?: undefined;
		  }
	)[];
};

export function Seo({
	description,
	lang = "hu",
	meta = [],
	title,
}: SeoProps) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`,
	);

	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
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
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata?.author || ``,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	);
}

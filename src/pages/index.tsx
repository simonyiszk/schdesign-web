import { graphql } from "gatsby";
import React from "react";

import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/header/Hero";
import { Layout } from "@/components/Layout";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";

export default function IndexPage({
	data,
}: {
	data: GatsbyTypes.Query;
}): JSX.Element {
	return (
		<Layout>
			<Seo title="😎" />
			<Hero />
			<Separator>Rólunk</Separator>
			<section className="container flex flex-col mt-4 mx-auto p-4 px-4">
				<Paragraph title={data.contentfulParagraph?.title ?? "Rólunk"}>
					{data.contentfulParagraph?.content?.childMdx?.body ?? "Ez eltűnt 😔"}
				</Paragraph>
			</section>

			<Separator>Legújabb munkáink</Separator>
			<Gallery
				works={data.allContentfulDisplayImage.edges.map(({ node }) => node)}
			/>
		</Layout>
	);
}

export const query = graphql`
	query IndexQuery {
		contentfulParagraph(title: { eq: "Rólunk" }) {
			title
			content {
				content
				childMdx {
					body
				}
			}
		}
		allContentfulDisplayImage(
			sort: { fields: image___updatedAt, order: DESC }
			limit: 12
		) {
			edges {
				node {
					title
					author
					image {
						file {
							url
							fileName
							contentType
						}
						updatedAt
						gatsbyImageData
					}
				}
			}
		}
	}
`;

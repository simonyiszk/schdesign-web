import { graphql } from "gatsby";
import React from "react";

import { Gallery } from "@/components/gallery/Gallery";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Separator } from "@/components/separator/Separator";

export default function Works({ data }: { data: GatsbyTypes.Query }) {
	return (
		<Layout>
			<SEO title="Munkáink" />
			<Separator>Munkáink</Separator>
			<Gallery
				works={data.allContentfulDisplayImage.edges.map(({ node }) => node)}
			/>
		</Layout>
	);
}

export const query = graphql`
	query WorksQuery {
		allContentfulDisplayImage(
			sort: { fields: image___updatedAt, order: DESC }
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

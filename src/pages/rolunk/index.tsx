import { graphql } from "gatsby";
import React from "react";

import { Layout } from "@/components/Layout";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { Separator } from "@/components/separator/Separator";

export default function About({ data }: { data: GatsbyTypes.Query }) {
	return (
		<Layout>
			<Separator>Rólunk</Separator>
			<section className="container flex flex-col mt-4 mx-auto p-4 px-4">
				{data.allContentfulParagraph.edges.map(({ node }, i) => {
					return (
						<Paragraph
							key={node.title ?? `${i}`}
							title={node.title ?? "Ez eltűnt 😔"}
						>
							{node.content?.childMdx?.body ?? "Ez eltűnt 😔"}
						</Paragraph>
					);
				})}
			</section>
		</Layout>
	);
}

export const query = graphql`
	query AboutQuery {
		allContentfulParagraph(sort: { order: ASC, fields: order }) {
			edges {
				node {
					title
					order
					content {
						childMdx {
							body
						}
					}
				}
			}
		}
	}
`;

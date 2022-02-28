import { graphql } from "gatsby";
import React from "react";

import type { CourseProps } from "@/components/courses/Course";
import { CourseSection } from "@/components/courses/CourseSection";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/header/Hero";
import { Layout } from "@/components/Layout";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";

const courseData: CourseProps[] = [
	{
		title: "Design principles",
		date: "02.28. hétfő",
		time: "18:00 - 20:00",
		location: "BME Q épület, QBF11",
		placeholderImage: "/courseicons/dp.png",
	},
	{
		title: "Illustrator kezdő",
		date: "03.03. csütörtök",
		time: "18:00 - 20:00",
		location: "BME Q épület, QBF11",
		placeholderImage: "/courseicons/ai.png",
	},
	{
		title: "Illustrator haladó",
		date: "03.07. hétfő",
		time: "18:00 - 20:00",
		location: "BME E épület, E404",
		placeholderImage: "/courseicons/ai.png",
	},
	{
		title: "Blender kezdő",
		date: "03.10. csütörtök",
		time: "18:00 - 20:00",
		location: "BME Q épület, QBF11",
		placeholderImage: "/courseicons/3d.png",
	},
	{
		title: "Blender haladó",
		date: "03.14. hétfő",
		time: "18:00 - 20:00",
		location: "BME E épület, E404",
		placeholderImage: "/courseicons/3d.png",
	},
];

export default function IndexPage({
	data,
}: {
	data: GatsbyTypes.Query;
}): JSX.Element {
	return (
		<Layout>
			<Seo title="😺" />
			<Hero />
			<Separator id="tanfolyam">Tanfolyamok</Separator>
			<section className="container flex flex-col mb-4 mt-4 mx-auto p-4 px-4">
				<CourseSection courses={courseData} unfinished joinable />
			</section>
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

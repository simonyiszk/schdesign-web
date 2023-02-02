import type { InferGetStaticPropsType } from "next";

import { CourseSection } from "@/components/courses/CourseSection";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/header/Hero";
import { Layout } from "@/components/Layout";
import { SplitParagraph } from "@/components/paragraph/SplitParagraph";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";
import courses from "@/data/courses.json";
import { getParagraphs, getWorks } from "@/utils/contentful";

export async function getStaticProps() {
	const paragraphs = await getParagraphs();
	const works = await getWorks();

	if (works.items.length > 12) {
		works.items = works.items.slice(0, 12);
	}

	return {
		props: {
			paragraph: paragraphs[0],
			works: works.items,
			buildDate: Date.now(),
		},
	};
}

type IndexProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function IndexPage({ paragraph, works, buildDate }: IndexProps) {
	return (
		<Layout buildDate={buildDate}>
			<Seo title="😺" />

			<Hero />
			{/* <Separator id="tanfolyam">Tanfolyamok</Separator>
			<section className="container mx-auto mb-4 mt-4 flex flex-col p-4 px-4">
				<CourseSection courses={courses} joinable />
			</section> */}
			<Separator>Rólunk</Separator>
			<section className="container mx-auto mt-4 flex flex-col p-4 px-4">
				<SplitParagraph title={paragraph.fields.title ?? "Rólunk"}>
					{paragraph.mdxSource ?? "Ez eltűnt 😔"}
				</SplitParagraph>
			</section>

			<Separator>Legújabb munkáink</Separator>
			<Gallery works={works} />
		</Layout>
	);
}

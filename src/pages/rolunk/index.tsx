import type { InferGetStaticPropsType } from "next";

import { Layout } from "@/components/Layout";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";
import { getParagraphs } from "@/utils/contentful";

export async function getStaticProps() {
	const paragraphs = await getParagraphs();

	return { props: { paragraphs } };
}

type AboutProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function About({ paragraphs }: AboutProps) {
	return (
		<Layout>
			<Seo title="Rólunk" />
			<Separator>Rólunk</Separator>
			<section className="container mx-auto mt-4 flex flex-col p-4 px-4">
				{paragraphs.map((paragraph, i) => {
					return (
						<Paragraph
							key={paragraph.fields.title ?? `${i}`}
							title={paragraph.fields.title ?? "Ez eltűnt 😔"}
						>
							{paragraph.mdxSource ?? "Az MDX is eltűnt 😔"}
						</Paragraph>
					);
				})}
			</section>
		</Layout>
	);
}

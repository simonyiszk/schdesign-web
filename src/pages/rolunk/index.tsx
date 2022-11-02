import type { InferGetStaticPropsType } from "next";

import { Layout } from "@/components/Layout";
import { SplitParagraph } from "@/components/paragraph/SplitParagraph";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";
import { getParagraphs } from "@/utils/contentful";

export async function getStaticProps() {
	const paragraphs = await getParagraphs();

	return { props: { paragraphs, buildDate: Date.now() } };
}

type AboutProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function About({ paragraphs, buildDate }: AboutProps) {
	return (
		<Layout buildDate={buildDate}>
			<Seo title="Rólunk" />
			<Separator>Rólunk</Separator>
			<section className="container mx-auto mt-4 flex flex-col p-4 px-4">
				{paragraphs.map((paragraph, i) => {
					return (
						<SplitParagraph
							key={paragraph.fields.title ?? `${i}`}
							title={paragraph.fields.title ?? "Ez eltűnt 😔"}
						>
							{paragraph.mdxSource ?? "Az MDX is eltűnt 😔"}
						</SplitParagraph>
					);
				})}
			</section>
		</Layout>
	);
}

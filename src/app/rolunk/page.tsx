import type { Metadata } from "next";

import { SplitParagraph } from "@/components/paragraph/SplitParagraph";
import { Separator } from "@/components/separator/Separator";
import { getParagraphs } from "@/utils/contentful";
import { makeTitle } from "@/utils/seo";

export const metadata: Metadata = {
	title: makeTitle("Rólunk"),
};

export default async function AboutUsPage() {
	const paragraphs = await getParagraphs();

	return (
		<>
			<Separator>Rólunk</Separator>
			<section className="container mx-auto mt-4 flex flex-col p-4">
				{paragraphs
					.filter((p) => p.fields.title && p.fields.content)
					.map((paragraph, i) => {
						return (
							<SplitParagraph
								key={paragraph.fields.title ?? `${i}`}
								title={paragraph.fields.title ?? "Ez eltűnt 😔"}
								source={paragraph.fields.content ?? "Az MDX is eltűnt 😔"}
							/>
						);
					})}
			</section>
		</>
	);
}

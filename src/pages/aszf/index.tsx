import type { InferGetStaticPropsType } from "next";

import { Layout } from "@/components/Layout";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";
import { getTOS } from "@/utils/contentful";

export async function getStaticProps() {
	const TOS = await getTOS();
	return { props: { TOS, buildDate: Date.now() } };
}

type WorksProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function TOSPage({ TOS, buildDate }: WorksProps) {
	return (
		<Layout buildDate={buildDate}>
			<Seo title="Általános szerződési feltételek" />
			<Separator>Általános szerződési feltételek</Separator>
			<section className="container mx-auto mt-4 flex flex-col p-4 px-4 text-justify">
				<Paragraph>{TOS.mdxSource}</Paragraph>
			</section>
		</Layout>
	);
}

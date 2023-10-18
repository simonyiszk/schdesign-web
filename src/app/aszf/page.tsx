import type { Metadata } from "next";

import { Paragraph } from "@/components/paragraph/Paragraph";
import { Separator } from "@/components/separator/Separator";
import { getTOS } from "@/utils/contentful";
import { makeTitle } from "@/utils/seo";

export const metadata: Metadata = {
	title: makeTitle("Megrendelési feltételek"),
};

export default async function TOSPage() {
	const TOS = await getTOS();
	return (
		<>
			<Separator>Megrendelési feltételek</Separator>
			<section className="container mx-auto mt-4 flex flex-col p-4 text-justify">
				<Paragraph source={TOS.fields.content} />
			</section>
		</>
	);
}

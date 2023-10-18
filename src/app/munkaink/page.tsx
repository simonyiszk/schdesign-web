import type { Metadata } from "next";

import { Gallery } from "@/components/gallery/Gallery";
import { Separator } from "@/components/separator/Separator";
import { getWorks } from "@/utils/contentful";
import { makeTitle } from "@/utils/seo";

export const metadata: Metadata = {
	title: makeTitle("Munkáink"),
};

export default async function Works() {
	const works = await getWorks();
	return (
		<>
			<Separator>Munkáink</Separator>
			<Gallery works={works.items} />
		</>
	);
}

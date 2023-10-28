import type { Metadata } from "next";

import { makeTitle } from "@/utils/seo";

export const metadata: Metadata = {
	title: makeTitle("Schönherz Arculati Kézikönyv"),
};

export default function SCHArculat() {
	return (
		<embed
			src="/SCHArculat.pdf"
			type="application/pdf"
			width="100%"
			style={{ height: "100vh" }}
		/>
	);
}

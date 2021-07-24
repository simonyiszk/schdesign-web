import React from "react";

import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function IndexPage(): JSX.Element {
	return (
		<Layout>
			<SEO title="404" />
			<div className="mb-36 py-20">
				<h1 className="mb-4 text-center text-5xl">404: Not Found</h1>
				<p className="text-center text-2xl">
					Ez az oldal sajnos nem található... 😔
				</p>
			</div>
		</Layout>
	);
}

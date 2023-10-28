import type { Metadata } from "next";

import { makeTitle } from "@/utils/seo";

export const metadata: Metadata = {
	title: makeTitle("404: Not Found"),
};

export default function NotFoundPage() {
	return (
		<div className="py-20">
			<h1 className="mb-4 text-center text-5xl">404: Not Found</h1>
			<p className="text-center text-2xl">
				Ez az oldal sajnos nem található... 😔
			</p>
		</div>
	);
}

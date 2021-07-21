import React from "react";

import { Hero } from "@/components/header/Hero";
import { Layout } from "@/components/Layout";

export default function IndexPage(): JSX.Element {
	return (
		<Layout>
			<Hero />
			<div className="py-20">
				<h1 className="text-center text-5xl">Next.js + Tailwind CSS</h1>
			</div>
		</Layout>
	);
}

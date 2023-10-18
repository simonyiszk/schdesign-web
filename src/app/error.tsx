"use client";

import Link from "next/link";

import { makeTitle } from "@/utils/seo";

export const metadata = {
	title: makeTitle("Hiba történt"),
};

export default function ErrorPage() {
	return (
		<div className="py-20">
			<h1 className="mb-4 text-center text-5xl">Hiba történt</h1>
			<p className="text-center text-2xl">Sajnos hiba történt... 😔</p>
			<Link href="/">térj vissza a főoldalra</Link>
		</div>
	);
}

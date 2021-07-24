import React from "react";

import { Navbar } from "@/components/header/Navbar";

import { Footer } from "./footer/Footer";

export function Layout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Navbar />

			<main>{children}</main>

			<Footer />
		</div>
	);
}

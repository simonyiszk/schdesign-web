import "@/styles/core.css";
import "@/styles/fonts.scss";
import "@/styles/global.scss";

import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/header/Navbar";
import { makeTitle } from "@/utils/seo";

const title = makeTitle("😺");
const description =
	"Az schdesign a Simonyi Károly Szakkollégium kreatív alkotóműhelye.";
const imageUrl = "/preview.png";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	formatDetection: {
		telephone: false,
	},
	title,
	description,
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: [
			{
				url: imageUrl,
				alt: title,
			},
		],
	},
	openGraph: {
		type: "website",
		url: "https://schdesign.hu",
		description,
		images: [
			{
				url: imageUrl,
				alt: title,
			},
		],
	},
	icons: [
		{
			rel: "shortcut icon",
			url: "/favicon.png",
		},
	],
	verification: {
		google: "lb8JjUJiH4GlXB8pe3axz_Th36HuV5HBhDDfo_oMMLQ",
	},
	metadataBase: new URL("https://schdesign.hu"),
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
	const buildDate = Date.now();
	return (
		<html lang="hu">
			<body>
				<div className="flex min-h-screen flex-col justify-between">
					<Navbar />
					<main id="#">{children}</main>
					<Footer buildDate={buildDate} />
				</div>
			</body>
		</html>
	);
}

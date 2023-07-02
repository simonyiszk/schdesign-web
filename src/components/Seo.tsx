import Head from "next/head";

export type SeoProps = {
	description?: string;
	lang?: string;
	title: string;
	meta?: { name: string; content: string }[];
};

export function Seo({ description, lang = "hu", meta = [], title }: SeoProps) {
	return (
		<Head>
			<title>{`${title} | schdesign`}</title>
			<meta
				name="description"
				content="Az schdesign a Simonyi Károly Szakkollégium kreatív alkotóműhelye."
			/>
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="schdesign" />
			<meta
				name="twitter:description"
				content="Az schdesign a Simonyi Károly Szakkollégium kreatív alkotóműhelye."
			/>
			<meta name="twitter:image" content="https://schdesign.hu/preview.png" />
			<meta name="thumbnail" content="https://schdesign.hu/preview.png" />
			<meta property="og:image" content="https://schdesign.hu/preview.png" />
			<meta property="og:title" content="schdesign" />
			<meta
				property="og:description"
				content="Az schdesign a Simonyi Károly Szakkollégium kreatív alkotóműhelye."
			/>
			<meta property="og:url" content="https://schdesign.hu" />
			<meta property="og:type" content="website" />

			<link rel="shortcut icon" href="/favicon.png" />
			<meta
				name="google-site-verification"
				content="lb8JjUJiH4GlXB8pe3axz_Th36HuV5HBhDDfo_oMMLQ"
			/>
		</Head>
	);
}

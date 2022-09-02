import "@/styles/core.css";
import "@/styles/fonts.scss";
import "@/styles/components.scss";
import "@/styles/utilities.css";
import "@/styles/global.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

export default function SDSApp({ Component, pageProps }: AppProps) {
	return (
		<React.StrictMode>
			<Head>
				<meta name="format-detection" content="telephone=no" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Component {...pageProps} />
		</React.StrictMode>
	);
}

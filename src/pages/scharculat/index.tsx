import clsx from "clsx";

import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

import styles from "./index.module.scss";

export default function SCHArculat() {
	return (
		<Layout>
			<Seo title="Schönherz Arculati kézikönyv" />
			<embed
				src="/SCHArculat.pdf"
				className={clsx(styles.embed)}
				type="application/pdf"
				width="100%"
				style={{ height: "100vh", ...styles }}
			/>
		</Layout>
	);
}

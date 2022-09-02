import { Seo } from "@/components/Seo";

import styles from "./index.module.scss";

export default function SCHArculat() {
	return (
		<>
			<Seo title="Schönherz Arculati kézikönyv" />
			<embed
				src="/SCHArculat.pdf"
				type="application/pdf"
				width="100%"
				style={{ height: "100vh", ...styles }}
			/>
		</>
	);
}

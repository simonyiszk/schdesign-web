import { Gallery } from "@/components/gallery/Gallery";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";

export default function Works() {
	return (
		<Layout>
			<Seo title="Munkáink" />
			<Separator>Munkáink</Separator>
			<Gallery works={[]} />
		</Layout>
	);
}

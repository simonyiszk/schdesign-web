import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

export default function IndexPage(): JSX.Element {
	return (
		<Layout>
			<Seo title="404" />
			<div className="py-20">
				<h1 className="mb-4 text-center text-5xl">404: Not Found</h1>
				<p className="text-center text-2xl">
					Ez az oldal sajnos nem található... 😔
				</p>
			</div>
		</Layout>
	);
}

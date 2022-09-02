import { Layout } from "@/components/Layout";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";

export default function About() {
	return (
		<Layout>
			<Seo title="Rólunk" />
			<Separator>Rólunk</Separator>
			<section className="container mx-auto mt-4 flex flex-col p-4 px-4">
				{[0].map((i) => {
					return (
						<Paragraph
							key={undefined ?? `${i}`}
							title={undefined ?? "Ez eltűnt 😔"}
						>
							{undefined ?? "Az MDX is eltűnt 😔"}
						</Paragraph>
					);
				})}
			</section>
		</Layout>
	);
}

import type { CourseProps } from "@/components/courses/Course";
import { CourseSection } from "@/components/courses/CourseSection";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/header/Hero";
import { Layout } from "@/components/Layout";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";
import courses from "@/data/courses.json";

export default function IndexPage(): JSX.Element {
	console.log("Tappancs a kutyus boldogsága úgy virágzik mint környezete.");

	return (
		<Layout>
			<Seo title="😺" />

			<Hero />
			{/* <Separator id="tanfolyam">Tanfolyamok</Separator>
			<section className="container flex flex-col mb-4 mt-4 mx-auto p-4 px-4">
				<CourseSection courses={courses} joinable />
			</section> */}
			<Separator>Rólunk</Separator>
			<section className="container mx-auto mt-4 flex flex-col p-4 px-4">
				<Paragraph title={undefined ?? "Rólunk"}>
					{undefined ?? "Ez eltűnt 😔"}
				</Paragraph>
			</section>

			<Separator>Legújabb munkáink</Separator>
			<Gallery works={[]} />
		</Layout>
	);
}

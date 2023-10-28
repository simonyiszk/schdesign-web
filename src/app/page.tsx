import { CourseSection } from "@/components/courses/CourseSection";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/header/Hero";
import { SplitParagraph } from "@/components/paragraph/SplitParagraph";
import { Separator } from "@/components/separator/Separator";
import {
	getCourses,
	getParagraphs,
	getSiteSettings,
	getWorks,
} from "@/utils/contentful";

export default async function MainPage() {
	const paragraphs = await getParagraphs();
	const works = await getWorks();
	const courses = await getCourses();
	const siteSettings = await getSiteSettings();

	if (works.items.length > 12) {
		works.items = works.items.slice(0, 12);
	}

	const paragraph = paragraphs[0];
	const { showCourses } = siteSettings.fields;

	return (
		<>
			<Hero />
			{showCourses && (
				<>
					<Separator id="tanfolyam">Tanfolyamok</Separator>
					<section className="container mx-auto my-4 flex flex-col p-4">
						<CourseSection courses={courses} />
					</section>
				</>
			)}
			<Separator>Rólunk</Separator>
			<section className="container mx-auto mt-4 flex flex-col p-4">
				<SplitParagraph
					title={paragraph.fields.title || "Rólunk"}
					source={paragraph.fields.content || "Ez eltűnt 😔"}
				/>
			</section>

			<Separator>Legújabb munkáink</Separator>
			<Gallery works={works.items} />
		</>
	);
}

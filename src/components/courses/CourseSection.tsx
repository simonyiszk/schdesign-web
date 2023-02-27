import type { GetCoursesReturnType } from "@/utils/contentful";

import { Course } from "./Course";

export type CourseSectionProps = {
	courses: GetCoursesReturnType;
};

export function CourseSection({ courses }: CourseSectionProps) {
	return (
		<div className="flex flex-wrap justify-center gap-8">
			{courses.map((course) => (
				<Course
					key={course.fields.title}
					mdxSource={course.mdxSource}
					{...course.fields}
				/>
			))}
		</div>
	);
}

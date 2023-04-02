import { useEffect, useState } from "react";

import type { GetCoursesReturnType } from "@/utils/contentful";

import { Course } from "./Course";

export type CourseSectionProps = {
	courses: GetCoursesReturnType;
};

export function CourseSection({ courses }: CourseSectionProps) {
	const [renderedCourses, setRenderedCourses] = useState<GetCoursesReturnType>(
		[],
	);

	const dayInMilliseconds = 1000 * 60 * 60 * 24;

	useEffect(() => {
		const now = new Date();
		setRenderedCourses(
			courses.filter((course) =>
				course.fields.date
					? new Date(course.fields.date).getTime() >
					  now.getTime() - dayInMilliseconds / 2
					: true,
			),
		);
	}, []);

	return (
		<div className="flex flex-wrap justify-center gap-8">
			{renderedCourses.map((course) => (
				<Course
					key={course.fields.title}
					mdxSource={course.mdxSource}
					{...course.fields}
				/>
			))}
		</div>
	);
}

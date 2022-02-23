import * as React from "react";

import { Course, CourseProps } from "./Course";

export function CourseSection({
	courses,
	unfinished,
}: {
	courses: CourseProps[];
	unfinished: boolean;
}) {
	return (
		<div className="flex flex-wrap gap-8 justify-center">
			{courses.map((course) => (
				<Course {...course} />
			))}
			{unfinished && (
				<div className="flex flex-col items-center justify-center p-4 text-center bg-white rounded-2xl shadow-2xl">
					<h3 className="mb-2 text-lg font-medium border-b border-gray-600">
						A további alkalmak még
						<br />
						sajnos nincsenek feltöltve...
					</h3>
					<p>Kérünk nézz vissza később</p>
				</div>
			)}
		</div>
	);
}

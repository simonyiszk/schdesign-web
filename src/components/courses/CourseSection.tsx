import * as React from "react";

import { Course, CourseProps } from "./Course";

export function CourseSection({
	courses,
	unfinished,
	joinable,
}: {
	courses: CourseProps[];
	unfinished?: boolean;
	joinable?: boolean;
}) {
	return (
		<div className="flex flex-wrap gap-8 justify-center">
			{courses.map((course) => (
				<Course {...course} />
			))}
			{unfinished && (
				<div className="flex flex-col items-center justify-center p-4 text-center bg-white rounded-2xl shadow-2xl">
					<h3 className="mb-2 font-medium border-b border-gray-600">
						A további alkalmak időpontjai
						<br />
						hamarosan érkeznek!
					</h3>
					<p>Nézz vissza és tarts velünk 👀</p>
				</div>
			)}
			{joinable && (
				<div className="flex flex-col items-center justify-center p-4 text-center bg-white rounded-2xl shadow-2xl">
					<h3 className="mb-2 font-medium border-b border-gray-600">
						Ha szeretnél emailben értesülni
						<br />
						a tanfolyam alkalmak előtt,
						<br />
						akkor iratkozz fel a form kitöltésével!
					</h3>
					<a
						className="text-primary underline break-all"
						href="https://forms.gle/iEfzoAFHWEQAfNrL7"
						target="_blank"
						rel="noreferrer"
					>
						https://forms.gle/iEfzoAFHWEQAfNrL7
					</a>
				</div>
			)}
		</div>
	);
}

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
		<div className="flex flex-wrap justify-center gap-8">
			{courses.map((course) => (
				<Course {...course} />
			))}
			{unfinished && (
				<div className="flex flex-col items-center justify-center rounded-2xl bg-white p-4 text-center shadow-2xl">
					<h3 className="mb-2 border-b border-gray-600 font-medium">
						A további alkalmak időpontjai
						<br />
						hamarosan érkeznek!
					</h3>
					<p>Nézz vissza és tarts velünk 👀</p>
				</div>
			)}
			{joinable && (
				<div className="flex flex-col items-center justify-center rounded-2xl bg-white p-4 text-center shadow-2xl">
					<h3 className="mb-2 border-b border-gray-600 font-medium">
						Ha szeretnél emailben értesülni
						<br />
						a tanfolyam alkalmak előtt,
						<br />
						akkor iratkozz fel a form kitöltésével!
					</h3>
					<a
						className="break-all text-primary underline"
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

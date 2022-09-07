export type CourseProps = {
	title: string;
	date: string;
	time: string;
	location: string;
	image?: string;
	placeholderImage?: string;
};

export function Course({
	title,
	date,
	time,
	location,
	image,
	placeholderImage,
}: CourseProps) {
	return (
		<div className="flex flex-col items-center justify-center rounded-2xl bg-white p-4 shadow-2xl">
			<div className="mb-2 flex flex-row items-center border-b-2 border-primary px-2 pb-2">
				<div className="h-10 w-10">
					{placeholderImage && !image && (
						<img src={placeholderImage} alt={`${title} logó`} className="" />
					)}
				</div>
				<h3 className="ml-2 text-lg font-medium">{title}</h3>
			</div>
			<div className="flex flex-col items-center">
				<p className="mb-1">{date}</p>
				<p className="mb-1 text-sm">{time}</p>
				<p className="border-t border-gray-600 text-center text-gray-600">
					{location}
				</p>
			</div>
		</div>
	);
}

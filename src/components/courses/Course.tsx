import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import type { TypeCourseFields } from "@/@types/generated";

import { PLink, PP } from "../paragraph/ParagraphComponents";

export type CourseProps = {
	mdxSource?: MDXRemoteSerializeResult | null;
} & TypeCourseFields;

export function Course({
	title,
	date,
	length,
	location,
	image,
	mdxSource,
}: CourseProps) {
	const dateObj = date && new Date(date);
	const dateString = dateObj?.toLocaleDateString("hu-HU", {
		month: "2-digit",
		day: "2-digit",
		weekday: "long",
	});

	const endtime =
		typeof length === "number" && dateObj
			? new Date(dateObj.getTime() + 60000 * length)
			: undefined;

	const startTimeString = dateObj?.toLocaleTimeString("hu-HU", {
		hour: "2-digit",
		minute: "2-digit",
	});

	const endTimeString = endtime?.toLocaleTimeString("hu-HU", {
		hour: "2-digit",
		minute: "2-digit",
	});

	const timeString = endTimeString
		? `${startTimeString} - ${endTimeString}`
		: startTimeString;

	return (
		<div className="flex flex-col items-center justify-center rounded-2xl bg-white p-4 text-center shadow-2xl">
			{mdxSource ? (
				<MDXRemote components={{ a: PLink, p: PP }} {...mdxSource} />
			) : (
				<>
					<div className="mb-2 flex w-full flex-row items-center justify-center border-b-2 border-primary px-2 pb-2">
						{image?.fields.file?.url && (
							<div className="relative h-10 w-10">
								<Image
									src={image.fields.file.url}
									fill
									alt={`${title} logó`}
									className=""
									unoptimized
								/>
							</div>
						)}
						<h3 className="ml-2 text-center text-lg font-medium">{title}</h3>
					</div>
					<div className="flex flex-col items-center">
						{date ? (
							<>
								<p className="mb-1">{dateString}</p>
								<p className="mb-1 text-sm">{timeString}</p>
							</>
						) : (
							<p className="mb-1 text-center">
								Időpont később <br /> lesz megadva
							</p>
						)}
						<p className="border-t border-gray-600 text-center text-gray-600">
							{location ?? "Helyszín később lesz megadva"}
						</p>
					</div>
				</>
			)}
		</div>
	);
}

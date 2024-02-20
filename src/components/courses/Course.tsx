import clsx from "clsx";
import Image from "next/image";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import { FaCalendarAlt } from "react-icons/fa";

import type { TypeCourseFields } from "@/@types/generated";
import { generateCalendarEvent } from "@/utils/calendar";

import { PLink, PP } from "../paragraph/ParagraphComponents";

function CalendarLinkWrapper({
	children,
	url,
}: {
	children: JSX.Element;
	url: string | undefined;
}): JSX.Element {
	return url ? (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			title="Tanfolyam hozzáadása Google Calendar-hoz"
		>
			{children}
		</a>
	) : (
		children
	);
}

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
	content,
}: CourseProps) {
	const dateObj = date && new Date(date);
	console.log(dateObj);
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

	const calendarEventLink =
		dateObj && endtime
			? generateCalendarEvent({
					title,
					startDate: dateObj,
					endDate: endtime,
					location,
			  })
			: undefined;

	return (
		<div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white p-4 text-center shadow-2xl sm:w-fit">
			{mdxSource ? (
				// @ts-expect-error mdx rsc bug?
				<MDXRemote components={{ a: PLink, p: PP }} source={content} />
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
						<CalendarLinkWrapper url={calendarEventLink}>
							<h3
								className={clsx(
									"ml-2 flex flex-row items-center gap-4 text-center text-lg font-medium ",
									calendarEventLink && "transition hover:text-primary",
								)}
							>
								{title}
								<FaCalendarAlt
									className={clsx("inline", !calendarEventLink && "hidden")}
								/>
							</h3>
						</CalendarLinkWrapper>
					</div>
					<div className="flex flex-col items-center">
						{date ? (
							<>
								<p className="mb-1 w-full">{dateString}</p>
								<p className="mb-1 w-full border-b border-gray-600 text-sm">
									{timeString}
								</p>
							</>
						) : (
							<p className="mb-1 w-full border-b border-gray-600 text-center">
								Időpont később <br /> lesz megadva
							</p>
						)}
						<p className="text-center text-gray-600">
							{location ?? "Helyszín később lesz megadva"}
						</p>
					</div>
				</>
			)}
		</div>
	);
}

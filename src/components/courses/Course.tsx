import {
	GatsbyImage,
	getImage,
	ImageDataLike,
	StaticImage,
} from "gatsby-plugin-image";
import * as React from "react";

export type CourseProps = {
	title: string;
	date: string;
	time: string;
	location: string;
	imageData?: ImageDataLike | null;
	placeholderImage?: string;
};

export function Course({
	title,
	date,
	time,
	location,
	imageData,
	placeholderImage,
}: CourseProps) {
	const image = imageData && getImage(imageData);
	return (
		<div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-2xl">
			<div className="flex flex-row items-center mb-2 pb-2 px-2 border-b-2 border-primary">
				<div className="w-10 h-10">
					{placeholderImage && !imageData && (
						<img src={placeholderImage} alt={`${title} logó`} className="" />
					)}
					{image && (
						<GatsbyImage image={image} alt={`${title} logó`} imgClassName="" />
					)}
				</div>
				<h3 className="ml-2 text-lg font-medium">{title}</h3>
			</div>
			<div className="flex flex-col items-center">
				<p className="mb-1">{date}</p>
				<p className="mb-1 text-sm">{time}</p>
				<p className="text-center text-gray-600 border-t border-gray-600">
					{location}
				</p>
			</div>
		</div>
	);
}

import clsx from "clsx";
import type { ImageDataLike } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

export type ImageDisplayProps = {
	author: string;
	title: string;
	imageData: ImageDataLike;
	index: number;
	length: number;
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
	openModal: () => void;
};

export function ImageDisplay({
	author,
	title,
	imageData,
	index,
	length,
	setActiveIndex,
	openModal,
}: ImageDisplayProps) {
	const image = getImage(imageData);

	return (
		<figure
			key={title + author}
			className={clsx(
				"relative flex flex-col",
				"transform-gpu hover:scale-105 transition ease-in-out",
				index !== length - 1 && "mb-3 md:mb-4 xl:mb-8",
			)}
		>
			<button
				type="button"
				onClick={() => {
					setActiveIndex(index);
					openModal();
				}}
			>
				{image && (
					<GatsbyImage
						image={image}
						alt={title}
						className={clsx(
							"w-full rounded-t-lg hover:scale-105 transition ease-in-out",
						)}
					/>
				)}

				<figcaption className="p-4 bg-gray-900 rounded-b-lg shadow-darker">
					<h4 className="pb-3 text-white text-lg">{title}</h4>
					<h5 className="text-gray-400 text-sm">{author}</h5>
				</figcaption>
			</button>
		</figure>
	);
}

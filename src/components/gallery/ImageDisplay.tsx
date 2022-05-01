import clsx from "clsx";
import type { ImageDataLike } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { FaLink } from "react-icons/fa";

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
	const [hidden, setHidden] = React.useState(true);
	const id = encodeURIComponent(
		`work_${`${title.replace(/\s+/g, "-").toLowerCase()}_${author
			.replace(/\s+/g, "-")
			.toLowerCase()}`}`,
	);
	React.useEffect(() => {
		if (window.location.hash === `#${id}`) {
			setActiveIndex(index);
			openModal();
		}
		return () => {};
	}, [id, index, openModal, setActiveIndex]);

	return (
		<figure
			key={title + author}
			className={clsx("relative flex flex-col", "p-3 md:p-4 xl:p-6 2xl:p-8")}
			id={id}
		>
			<button
				type="button"
				className="group rounded-lg shadow-darker"
				onClick={() => {
					setActiveIndex(index);
					openModal();
				}}
			>
				<div className="overflow-hidden rounded-t-lg">
					{image && (
						<GatsbyImage
							image={image}
							alt={title}
							className={clsx(
								"w-full",
								"transform-gpu transition duration-300 ease-in-out group-hover:scale-105",
							)}
						/>
					)}
				</div>
			</button>
			<figcaption className="rounded-b-lg bg-blueGray-900 p-4 px-8 text-center shadow-darker">
				<h4 className="pb-3 text-lg text-white">
					{title}
					<button
						type="button"
						className="relative p-2"
						onClick={() => {
							navigator.clipboard.writeText(
								`${window.location.protocol}//${window.location.host}/munkaink#${id}`,
							);
							setHidden(false);
							setTimeout(() => {
								setHidden(true);
							}, 3000);
						}}
					>
						<FaLink className="h-4 w-4 hover:text-primary" />
						<span className="hidden">Megosztás</span>
						<div
							className={clsx(
								"pointer-events-none absolute left-[-100%] w-fit select-none rounded-lg bg-primary p-2 text-xs font-bold text-white transition-all",
								hidden ? "top-[0%] opacity-0" : "top-[120%] opacity-100",
							)}
						>
							Link&nbsp;másolva
						</div>
					</button>
				</h4>
				<h5 className="text-sm text-gray-400">{author}</h5>
			</figcaption>
		</figure>
	);
}

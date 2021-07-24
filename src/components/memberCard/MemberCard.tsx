import clsx from "clsx";
import type { ImageDataLike } from "gatsby-plugin-image";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

export type MemberCardProps = {
	name?: string;
	email?: string;
	title?: string;
	imageData?: ImageDataLike | null;
	isOld?: boolean;
} & React.HTMLProps<HTMLDivElement>;

export function MemberCard({
	name,
	email,
	title,
	imageData,
	isOld,
	...restProps
}: MemberCardProps) {
	const image = imageData && getImage(imageData);

	function getTitle() {
		if (title != null) {
			return title;
		}
		return isOld ? "Öregtag" : "Tag";
	}

	return (
		<figure
			className={clsx(
				"flex flex-col justify-center p-4 max-w-xs text-center bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition ease-in-out",
				restProps.className,
			)}
		>
			{image ? (
				<GatsbyImage
					image={image}
					alt={`${name} arcképe`}
					imgClassName="mb-2 h-64 rounded-2xl object-cover overflow-hidden"
				/>
			) : (
				<StaticImage
					src="../../assets/images/blank.png"
					placeholder="blurred"
					alt="Hiányzó arckép"
					imgClassName="mb-2 h-64 rounded-2xl object-cover overflow-hidden"
				/>
			)}

			<h4 className="mb-2 text-lg font-medium border-b-2 border-primary">
				{name}
			</h4>

			{email && (
				<a
					className="mb-0.5 hover:text-primary text-sm"
					href={`mailto:${email}`}
				>
					{email}
				</a>
			)}

			<p className="text-gray-600 font-RobotoMono text-sm lowercase">
				{getTitle()}
			</p>
		</figure>
	);
}

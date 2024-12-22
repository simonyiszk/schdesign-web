"use client";

import Masonry from "@mui/lab/Masonry";
import clsx from "clsx";
import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Lightbox from "react-spring-lightbox";

import type { TypeDisplayImageWithoutUnresolvableLinksResponse } from "@/@types/generated";

import styles from "./Gallery.module.scss";
import { ImageDisplay } from "./ImageDisplay";

type OverlayFooterProps = { title: string; count: string };

function OverlayFooter({ title, count }: OverlayFooterProps) {
	return (
		<>
			<div className="absolute bottom-2 left-2 text-xs text-gray-300">
				{title}
			</div>
			<div className="absolute bottom-2 right-2 text-xs text-gray-300">
				{count}
			</div>
		</>
	);
}

export type GalleryProps = {
	works: TypeDisplayImageWithoutUnresolvableLinksResponse[];
};

export function Gallery({ works }: GalleryProps) {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const openModal = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	return (
		<>
			<section
				className={clsx(
					styles.workGallery,
					"pointer-events-auto p-3 md:p-4 xl:p-8",
				)}
			>
				<Masonry
					columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4, "2xl": 4 }}
					spacing={{ xs: 0, sm: 0, md: 0, lg: 0, xl: 0, "2xl": 0 }}
				>
					{works.map(({ fields }, i) => {
						return (
							<ImageDisplay
								key={fields.author + fields.title}
								author={fields.author}
								title={fields.title}
								image={fields.image?.fields.file}
								index={i}
								setActiveIndex={setActiveIndex}
								openModal={openModal}
							/>
						);
					})}
				</Masonry>
			</section>

			<Lightbox
				className="bg-black/75 backdrop-blur"
				isOpen={modalIsOpen}
				currentIndex={activeIndex}
				onClose={closeModal}
				onNext={() => setActiveIndex((i) => (i + 1) % works.length)}
				onPrev={() =>
					setActiveIndex((i) => (i + works.length - 1) % works.length)
				}
				images={works.map(({ fields }) => ({
					src: fields.image?.fields.file?.url ?? "",
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
					alt: fields.title ?? "",
				}))}
				// @ts-expect-error: wrong type defs?
				renderNextButton={({ canNext }) => (
					<button
						className="z-50 inline-block p-2 transition-all active:scale-75 disabled:opacity-50"
						type="button"
						disabled={!canNext}
						onClick={() => setActiveIndex((i) => (i + 1) % works.length)}
					>
						<FaChevronRight className="h-8 w-8 text-white drop-shadow-md transition-all hover:scale-125 sm:h-12 sm:w-12" />
					</button>
				)}
				// @ts-expect-error: wrong type defs?
				renderPrevButton={({ canPrev }) => (
					<button
						className="z-50 inline-block p-2 transition-all active:scale-75 disabled:opacity-50"
						type="button"
						disabled={!canPrev}
						onClick={() =>
							setActiveIndex((i) => (i + works.length - 1) % works.length)
						}
					>
						<FaChevronLeft className="h-8 w-8 text-white drop-shadow-md transition-all hover:scale-125 sm:h-12 sm:w-12" />
					</button>
				)}
				renderFooter={() => (
					<OverlayFooter
						title={`${works[activeIndex].fields.title} - ${works[activeIndex].fields.author}`}
						count={`${activeIndex + 1}/${works.length}`}
					/>
				)}
				renderHeader={() => (
					<button
						className="absolute right-2 top-2 z-50 inline-block p-2 transition-all active:scale-75 disabled:opacity-50"
						type="button"
						onClick={closeModal}
					>
						<FaTimes className="h-8 w-8 text-white drop-shadow-md transition-all hover:scale-125 sm:h-12 sm:w-12" />
					</button>
				)}
			/>
		</>
	);
}

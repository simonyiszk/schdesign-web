import Masonry from "@mui/lab/Masonry";
import clsx from "clsx";
import type { EntryWithLinkResolutionAndWithoutUnresolvableLinks } from "contentful";
import { useCallback, useState } from "react";

import type { TypeDisplayImageFields } from "@/@types/generated";
import carouselFormatters from "@/utils/carouselFormatters";

import styles from "./Gallery.module.scss";
import { ImageDisplay } from "./ImageDisplay";

export type GalleryProps = {
	works: EntryWithLinkResolutionAndWithoutUnresolvableLinks<TypeDisplayImageFields>[];
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
					"fit pointer-events-auto p-3 md:p-4 xl:p-8",
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

			{/* {ModalGateway && (
				<ModalGateway>
					{modalIsOpen && (
						<Modal onClose={closeModal}>
							<Carousel
								views={works.map(({ author, title, image }) => ({
									source: image?.file?.url ?? "",
									caption: `${title} - ${author}`,
									alt: title ?? "",
								}))}
								currentIndex={activeIndex}
								// @ts-expect-error: idk
								formatters={carouselFormatters}
							/>
						</Modal>
					)}
				</ModalGateway>
			)} */}
		</>
	);
}

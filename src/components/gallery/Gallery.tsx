import Masonry from "@mui/lab/Masonry";
import clsx from "clsx";
import * as React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import carouselFormatters from "@/utils/carouselFormatters";

import * as styles from "./Gallery.module.scss";
import { ImageDisplay } from "./ImageDisplay";

export type GalleryProps = {
	works: GatsbyTypes.ContentfulDisplayImage[];
};

export function Gallery({ works }: GalleryProps) {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [activeIndex, setActiveIndex] = React.useState(0);

	const openModal = React.useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const closeModal = React.useCallback(() => {
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
					{works.map(({ author, title, image }, i) => {
						return (
							<ImageDisplay
								key={(author ?? "") + (title ?? "")}
								author={author ?? ""}
								title={title ?? ""}
								// @ts-expect-error: idk
								imageData={image?.gatsbyImageData}
								index={i}
								length={works.length}
								setActiveIndex={setActiveIndex}
								openModal={openModal}
							/>
						);
					})}
				</Masonry>
			</section>

			{ModalGateway && (
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
			)}
		</>
	);
}

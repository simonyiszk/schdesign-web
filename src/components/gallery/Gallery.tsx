import clsx from "clsx";
import React from "react";
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

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<section
				className={clsx(
					styles.workGallery,
					"fit p-3 pointer-events-auto md:p-4 xl:p-8",
				)}
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
			</section>

			{ModalGateway && (
				<ModalGateway>
					{modalIsOpen && (
						<Modal onClose={closeModal}>
							<Carousel
								views={works.map(({ author, title, image }) => ({
									// eslint-disable-next-line global-require, import/no-dynamic-require
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

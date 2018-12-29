import Img from 'gatsby-image';
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Box, Flex, Link } from 'rebass';
import { chunk, sum } from '../utils/array';
import carouselFormatters from '../utils/carouselFormatters';

type Props = {
  images: {
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
    originalImg: string;
    caption: string;
  }[];
  itemsPerRow?: number[];
};

const Gallery = ({
  images,
  itemsPerRow: itemsPerRowByBreakpoints = [1],
}: Props) => {
  const aspectRatios = images.map(image => image.aspectRatio);
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios),
      ),
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);

  const closeModal = () => setModalIsOpen(false);
  const openModal = (imageIndex: number) => {
    setModalCurrentIndex(imageIndex);
    setModalIsOpen(true);
  };

  return (
    <Flex flexWrap="wrap">
      {images.map((image, i) => (
        <Link
          key={image.src}
          href={image.originalImg}
          flex={rowAspectRatioSumsByBreakpoints.map((rowAspectRatioSums, j) => {
            const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
            const rowAspectRatioSum = rowAspectRatioSums[rowIndex];

            return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`;
          })}
          onClick={(e: React.MouseEvent<HTMLLinkElement>) => {
            e.preventDefault();
            openModal(i);
          }}
        >
          <Box
            as={Img}
            fluid={image}
            title={image.caption}
            css={`
              transition: filter 0.3s;
              filter: none;
              :hover {
                filter: brightness(87.5%);
              }
            `}
          />
        </Link>
      ))}

      <ModalGateway>
        {modalIsOpen && (
          <Modal onClose={closeModal}>
            <Carousel
              views={images.map(({ originalImg, caption }) => ({
                source: originalImg,
                caption,
              }))}
              currentIndex={modalCurrentIndex}
              formatters={carouselFormatters}
              components={{ FooterCount: () => null }}
            />
          </Modal>
        )}
      </ModalGateway>
    </Flex>
  );
};

export default Gallery;

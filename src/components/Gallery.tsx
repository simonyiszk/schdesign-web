import Img from 'gatsby-image';
import React from 'react';
import { Box, Flex } from 'rebass';
import { chunk, sum } from '../utils/array';

type Props = {
  images: {
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
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

  return (
    <Flex flexWrap="wrap">
      {images.map((image, i) => (
        <Box
          key={image.src}
          as={Img}
          fluid={image}
          flex={rowAspectRatioSumsByBreakpoints.map((rowAspectRatioSums, j) => {
            const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
            const rowAspectRatioSum = rowAspectRatioSums[rowIndex];

            return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`;
          })}
        />
      ))}
    </Flex>
  );
};

export default Gallery;

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
  itemsPerRow?: number;
};

const Gallery = ({ images, itemsPerRow = 1 }: Props) => {
  const rows = chunk(images, itemsPerRow);

  return (
    <Flex flexWrap="wrap">
      {rows.map(row => {
        const rowAspectRatioSum = sum(row.map(image => image.aspectRatio));

        return row.map(image => (
          <Box
            key={image.src}
            as={Img}
            fluid={image}
            flex={`${(image.aspectRatio / rowAspectRatioSum) * 100}%`}
          />
        ));
      })}
    </Flex>
  );
};

export default Gallery;

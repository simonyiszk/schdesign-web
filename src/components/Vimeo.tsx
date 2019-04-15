import React from 'react';
import { Flex, Box, Text } from 'rebass';
import Paragraph from './Paragraph';
import Iframe from 'react-iframe';

type Props = {
  vimeoid: number;
  caption: string;
};

const Vimeo = (props: Props) => (
  <Box>
    <Box
      mt={4}
      css={`
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
        `}
      >
      <Iframe url={"https://player.vimeo.com/video/"+props.vimeoid}
        className="myClassname"
        position="relative"
        webkitallowfullscreen
        mozallowfullscreen
        allowFullScreen
        position="absolute"
        top="0"
        left= "0"
        width="100%"
        height="100%"
        />
    </Box>

    <Text
      width={[1, 0.5]}
      pb={2}
      css={`
        font-size: 0.85rem;
        line-height: 1rem;
        `}
      > {props.caption} </Text>
  </Box>
);

export default Vimeo;

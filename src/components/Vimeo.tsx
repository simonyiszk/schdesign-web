import React from 'react';
import { Flex, Box, Text } from 'rebass';
import Iframe from 'react-iframe';

type Props = {
  vimeoid: number;
};

const Vimeo = (props: Props) => (
<Box
  mb={4}
  >
  <Iframe url={"https://player.vimeo.com/video/"+props.vimeoid}
    className="myClassname"
    position="relative"
    webkitallowfullscreen
    mozallowfullscreen
    allowFullScreen
    />
</Box>
);

export default Vimeo;

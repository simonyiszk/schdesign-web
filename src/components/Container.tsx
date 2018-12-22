import React from 'react';
import { Box } from 'rebass';

type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => (
  <Box {...props} px={3} mx="auto" css="max-width: 1024px;" />
);

export default Container;

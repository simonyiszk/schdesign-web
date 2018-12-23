import React from 'react';
import { Box } from 'rebass';

export type Props = {
  variant?: 'light' | 'dark';
};

const Section = ({ variant, ...props }: Props) => (
  <Box
    as="section"
    {...variant === 'dark' && { bg: 'darkgray', color: 'white' }}
    {...props}
  />
);

export default Section;

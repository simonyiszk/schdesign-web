import React from 'react';
import { Box } from 'rebass';

export type Props = {
  variant?: 'light' | 'dark';
  [propName: string]: any; // TODO: Extend type of `Box`
};

const Video = ({ variant, ...props }: Props) => (
{/*
  <Box
    as="section"
    {...variant === 'dark' && { bg: 'darkgray', color: 'white' }}
    {...props}
    mb={6}
  />
*/}
);

export default Video;

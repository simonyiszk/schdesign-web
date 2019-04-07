import React from 'react';
import { Box } from 'rebass';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  [propName: string]: any; // TODO: Extend type of `Box`
};

const TextLink = ({ onClick, ...props }: Props) => (
  <Box
    as="span"
    onClick={onClick}
    {...props}
    css={`
      color: blue;
      cursor: pointer;
      :not(:hover) {
        opacity: 0.75;
        color: blue;
      }
    `}
  />
);

export default TextLink;

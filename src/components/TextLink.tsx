import React from 'react';
import { Box } from 'rebass';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  [propName: string]: any; // TODO: Extend type of `Box`
}

const TextLink = ({ onClick, ...props }: Props) => (
  <Box
    as="span"
    onClick={onClick}
    {...props}
    css={`
      color: #f8485e;
      font-weight: bold;
      text-transform: lowercase;
      cursor: pointer;
      :not(:hover) {
        opacity: 0.75;
      }
    `}
  />
);

export default TextLink;

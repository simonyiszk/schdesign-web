import React from 'react';
import { Box } from 'rebass';

type Props = {
  children: React.ReactNode;
  [propName: string]: any; // TODO: Extend type of `Box`
};

const NavLink = (props: Props) => (
  <Box
    as="a"
    color="inherit"
    {...props}
    css={`
      text-decoration: none;
      text-transform: lowercase;
      &:not(:hover) {
        opacity: 0.75;
      }
    `}
  />
);

export default NavLink;

import React from 'react';
import { Box } from 'rebass';

interface Props {
  children: React.ReactNode;
  to: string;
  [propName: string]: any; // TODO: Extend type of `Box`
}

const NavLink = ({ to, ...props }: Props) => (
  <Box
    as="a"
    color="inherit"
    to={to}
    {...props}
    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
      const elementID = to.split('#')[1];
      const element = document.getElementById(elementID);

      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }}
    css={`
      text-decoration: none;
      text-transform: lowercase;
      :not(:hover) {
        opacity: 0.75;
      }
    `}
  />
);

export default NavLink;

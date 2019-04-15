import React from 'react';
import { Box } from 'rebass';

type Props = {
  children: React.ReactNode;
  to: string;
  [propName: string]: any; // TODO: Extend type of `Box`
};

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
        //element.scrollIntoView({ behavior: 'smooth', block: 'start'});
        var d = element.offsetTop;
        window.scroll(0,d-100);
      }
    }}
    css={`
      text-decoration: none;
      color: blue;
      :not(:hover) {
        color: #737373;
      }
    `}
  />
);

export default NavLink;

import React from 'react';
import { Box } from 'rebass';

type Props = {
  children: React.ReactNode;
  as?: 'ul' | 'ol';
  [propName: string]: any; // TODO: Extend type of `Box`
};

const List = (props: Props) =>
  <Box
    as="ul"
    {...props}
    fontSize={'0.85rem'}
    css={`
      list-style-type: none;
      color: #737373;
    `}
  />;

export default List;

import React from 'react';
import { Box } from 'rebass';

type Props = {
  children: React.ReactNode;
  as?: 'ul' | 'ol';
  [propName: string]: any; // TODO: Extend type of `Box`
};

const List = ({ as = 'ul', ...props }: Props) => <Box as={as} {...props} />;

export default List;

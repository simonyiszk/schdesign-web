import React from 'react';
import { Box } from 'rebass';

interface Props {
  children: React.ReactNode;
  as?: 'ul' | 'ol';
  [propName: string]: any; // TODO: Extend type of `Box`
}

const List = (props: Props) => <Box as="ul" {...props} />;

export default List;

import React from 'react';
import { Box } from 'rebass';

interface Props {
  children: React.ReactNode;
  [propName: string]: any; // TODO: Extend type of `Box`
}

const ListItem = (props: Props) => <Box as="li" {...props} />;

export default ListItem;

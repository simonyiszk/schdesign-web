import React from 'react';
import { Text } from 'rebass';

type Props = {
  [propName: string]: any; // TODO: Extend type of `Text`
};

const Paragraph = (props: Props) => <Text as="p" fontSize={2} lineHeight={1.5} {...props} />;

export default Paragraph;

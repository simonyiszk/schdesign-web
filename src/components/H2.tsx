import React from 'react';
import { Text } from 'rebass';

type Props = {
  [propName: string]: any; // TODO: Extend type of `Text`
};

const H2 = (props: Props) => <Text as="h2" {...props} width={[ .95, .9 ]} py={2}/>;

export default H2;

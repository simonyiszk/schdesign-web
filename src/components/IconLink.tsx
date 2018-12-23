import React from 'react';
import { Box } from 'rebass';
import { StyledIcon } from 'styled-icons';

type Props = {
  icon: StyledIcon;
  href?: string;
  title?: string;
  [propName: string]: any; // TODO: Extend type of `Box`
};

const IconLink = ({ icon: Icon, title, ...props }: Props) => (
  <Box
    as="a"
    {...props}
    css={`
      color: inherit;
      &:hover {
        color: ${({ theme }: any) => theme.colors.red};
      }
    `}
  >
    <Icon title={title} size="1em" />
  </Box>
);

export default IconLink;

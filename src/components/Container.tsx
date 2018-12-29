import React from 'react';
import { Box } from 'rebass';
import { ThemeConsumer } from 'styled-components';

type Props = {
  children: React.ReactNode;
  [propName: string]: any; // TODO: Extend type of `Box`
};

const Container = (props: Props) => (
  <ThemeConsumer>
    {theme => (
      <Box
        {...props}
        px={3}
        mx="auto"
        css={`
          @media (min-width: ${theme.breakpoints[1]}px) {
            max-width: 84vw;
          }

          @media (min-width: ${theme.breakpoints[3]}px) {
            max-width: 68vw;
          }
        `}
      />
    )}
  </ThemeConsumer>
);

export default Container;

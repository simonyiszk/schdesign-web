import { Heading } from 'rebass';

const theme = {
  breakpoints: [600, 1024, 1440, 1920],
};

Heading.defaultProps = {
  ...Heading.defaultProps,
  m: undefined,
  fontSize: undefined,
  fontWeight: undefined,
};

export default theme;

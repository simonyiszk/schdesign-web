import { Heading } from 'rebass';

const theme = {
  breakpoints: [600, 1024, 1440, 1920],
  colors: {
    red: '#f8485e',
    darkgray: '#3d3d3d',
  },
};

Heading.defaultProps = {
  ...Heading.defaultProps,
  m: undefined,
  fontSize: undefined,
  fontWeight: undefined,
};

export default theme;

import { Heading, Link } from 'rebass';

const theme = {
  breakpoints: [600, 1024, 1440, 1920],
  colors: {
    red: '#f8485e',
    darkgray: '#3d3d3d',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(value => `${value / 16}rem`),
  fonts: {
    sans: 'Montserrat, system-ui, sans-serif',
    mono: '"Roboto Mono", monospace',
  },
  fontWeights: {
    bold: 600,
  },
  Heading: {
    fontWeight: 500,
    textTransform: 'lowercase',
  },
  Link: {
    padding: '0.125em 0',
    textDecoration: 'none',
    'p &:hover': {
      background: '#f8485e',
      color: 'white',
    },
  },
};

Heading.defaultProps = {
  ...Heading.defaultProps,
  as: 'h1',
  fontSize: '2rem',
  fontFamily: 'mono',
};

Link.defaultProps = {
  ...Link.defaultProps,
  color: 'red',
};

export default theme;

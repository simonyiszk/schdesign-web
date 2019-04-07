import { Heading, Link } from 'rebass';

const theme = {
  breakpoints: [600, 1024, 1440, 1920],
  colors: {
    red: '#f8485e',
    darkgray: '#1E1E1E',
    blue: `#0043ff`,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(value => `${value / 16}rem`),
  fonts: {
    sans: 'ibm-plex-sans, Helvetica Neue, Arial, sans-serif',
    mono: 'ibm-plex-mono, monospace',
  },
  fontWeights: {
    bold: 400,
  },
  Heading: {
    // fontWeight: 300,
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
  fontSize: '1.5rem',
  fontFamily: 'sans',
};

Link.defaultProps = {
  ...Link.defaultProps,
  color: 'blue',
};

export default theme;

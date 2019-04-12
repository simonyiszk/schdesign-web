import { Heading, Link, Text } from 'rebass';

const theme = {
  breakpoints: [600, 1024, 1440, 1920],
  colors: {
    red: '#f8485e',
    darkgray: '#323232',
    blue: `#0043ff`,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(value => `${value / 16}rem`),
  fonts: {
    sans: 'ibm-plex-sans, Helvetica Neue, Arial, sans-serif',
    mono: 'ibm-plex-mono, monospace',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    semibold: 700,
    bold: 800,
  },
  Link: {
    padding: '0.125em 0',
    textDecoration: 'none',
    'p &:hover': {
      textDecoration: 'underline',
    },
  },
};

Heading.defaultProps = {
  ...Heading.defaultProps,
  as: 'h1',
  fontSize: '2rem',
  fontFamily: 'sans',
  fontWeight: 'light',
};

Link.defaultProps = {
  ...Link.defaultProps,
  color: 'blue',
};

Text.defaultProps = {
  ...Text.defaultProps,
  as: 'p',
  fontSize: '1rem',
  lineHeight: '1.5',
};

export default theme;

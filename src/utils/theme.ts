import { Heading, Link } from 'rebass';

const theme = {
  breakpoints: [600, 1024, 1440, 1920],
  colors: {
    red: '#f8485e',
    darkgray: '#3d3d3d',
  },
  Heading: {
    textTransform: 'lowercase',
  },
  Link: {
    textUnderlinePosition: 'under',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

Heading.defaultProps = {
  ...Heading.defaultProps,
  m: undefined,
  fontSize: undefined,
  fontWeight: undefined,
};

Link.defaultProps = {
  ...Link.defaultProps,
  color: 'red',
};

export default theme;

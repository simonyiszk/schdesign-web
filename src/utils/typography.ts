import Typography from 'typography';
import theme from './theme';

const typography = new Typography({
  headerFontFamily: ['Roboto Mono', 'monospace'],
  bodyFontFamily: ['Montserrat', 'system-ui', 'sans-serif'],
  headerWeight: 500,
  boldWeight: 600,

  // Responsive typography
  // Source: https://github.com/KyleAMathews/typography.js/issues/19#issuecomment-327630129
  overrideStyles: () => ({
    [`@media (min-width: ${theme.breakpoints[1]}px)`]: {
      html: {
        fontSize: '125%',
      },
    },

    [`@media (min-width: ${theme.breakpoints[3]}px)`]: {
      html: {
        fontSize: '150%',
      },
    },
  }),
});

export default typography;

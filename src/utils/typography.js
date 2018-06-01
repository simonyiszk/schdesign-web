import Typography from 'typography';

const typography = new Typography({
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Roboto Mono',
      styles: ['500'],
    },
    {
      name: 'Montserrat',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Roboto Mono', 'monospace'],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  headerWeight: 500,
  blockMarginBottom: 0,
  includeNormalize: false,
});

export default typography;

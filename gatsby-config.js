module.exports = {
  siteMetadata: {
    title: 'Gatsby Strict Starter',
    description:
      'Demo for a Gatsby starter with strict linting and auto-formatting rules.',
    language: 'en',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};

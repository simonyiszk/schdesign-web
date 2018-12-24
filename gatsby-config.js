module.exports = {
  siteMetadata: {
    title: 'Schönherz Design Stúdió',
    description: 'A Simonyi Károly Szakkollégium kreatív alkotóműhelye.',
    language: 'hu',
    email: 'hello@schdesign.hu',
    siteBehanceURL: 'https://www.behance.net/wearethesds/',
    siteFacebookURL: 'https://www.facebook.com/schonherzdesignstudio/',
    siteInstagramURL: 'https://www.instagram.com/schdesign.hu/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};

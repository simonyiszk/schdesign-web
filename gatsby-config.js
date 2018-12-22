module.exports = {
  siteMetadata: {
    title: 'Schönherz Design Stúdió',
    description: 'A Simonyi Károly Szakkollégium kreatív alkotóműhelye.',
    language: 'hu',
    email: 'hello@schdesign.hu',
    siteBehanceURL: 'https://www.behance.net/wearethesds',
    siteFacebookURL: 'https://www.facebook.com/schonherzdesignstudio',
    siteInstagramURL: 'https://www.instagram.com/schdesign.hu/',
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

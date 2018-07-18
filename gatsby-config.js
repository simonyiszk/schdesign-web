module.exports = {
  siteMetadata: {
    title: 'Schönherz Design Stúdió',
    language: 'hu',
    email: 'hello@schdesign.hu',
    siteBehanceURL: 'https://www.behance.net/wearethesds',
    siteFacebookURL: 'https://www.facebook.com/schonherzdesignstudio',
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
  ],
};

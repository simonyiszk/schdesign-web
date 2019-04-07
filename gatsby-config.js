module.exports = {
  siteMetadata: {
    title: 'Shixie project showcase',
    description: 'A collection of projects in design systems and XR',
    language: 'en',
    email: 'ohwellaye@gmail.com',
    siteDribbbleURL: 'https://dribbble.com/shixie',
    siteLinkedInURL: 'https://www.linkedin.com/in/shixie/',
    siteTwitterURL: 'https://twitter.com/shixieshi',
    siteInstagramURL: 'https://www.instagram.com/shixsketch/',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Schönherz Design Stúdió',
        short_name: 'schdesign',
        start_url: '/',
        background_color: '#3d3d3d',
        theme_color: '#f8485e',
        display: 'standalone',
        icon: 'src/assets/favicon.png',
        legacy: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};

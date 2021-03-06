require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Nastasia Jewels`,
    description: `Snipcart test`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.GATSBY_DATO_API_TOKEN,
        environment: `main`,
        previewMode: false,
        disableLiveReload: false,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-snipcartv3',
    //   options: {
    //     apiKey: process.env.GATSBY_SNIPCART_TEST_API_KEY,
    //     autopop: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: '3.0.29',
        publicApiKey: process.env.GATSBY_SNIPCART_API_KEY,
        defaultLang: `pl`,
        currency: `pln`,
        // templatesUrl: `/snipcart/index.html`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pl',
      },
    },
  ],
};

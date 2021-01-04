require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Sanity Template`,
    description: `A Template Using Gatsby and Sanity.io`,
    author: `Borealis Web Development`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `borealis-gatsby-sanity`,
        short_name: `Gatsby Sanity`,
        start_url: `/`,
        background_color: `rgb(18, 47, 111)`,
        theme_color: `rgb(18, 47, 111)`,
        display: `minimal-ui`,
        icon: `src/images/Logo-bkgd.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts/
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Bebas Neue`],
        display: "swap",
      },
    },

    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-161703481-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    }, // this (optional) plugin enables Progressive Web App + Offline functionality // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

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
        projectId: "ae5vsv43",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{ family: `Bebas Neue` }],
      },
    },
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

require(`dotenv`).config()
const config = require(`./src/config`)
module.exports = {
  siteMetadata: {
    title: config.title,
    siteUrl: config.url,
    description: config.description,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-rehype-images`,
            options: {
              tag: `rehype-image`,
              quality: 80,
              maxWidth: 2112,
              toFormat: `WEBP`,
              srcSetBreakpoints: [1056 / 4, 1056 / 2, 1056],
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: 100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ReasonsToSmile blog`,
        short_name: `ReasonsToSmile`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#EEEEEE`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: config.instagram,
        access_token: process.env.IG_ACCESS_TOKEN,
        instagram_id: config.instagram_id,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

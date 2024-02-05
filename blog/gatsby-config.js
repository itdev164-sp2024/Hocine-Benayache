
module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: ``,
    author: `Hocine Benayache`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
        name:`Hocine benayache`,
        company:`Blog Inc.`,
        address:`PO Box 2322`
      }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options:{
        spaceId: `suojjqm9wkfe`,
        accessToken: `rTjMQPuJBr1uKPem9LhMtrmykyjnUhqMxtXSb4q6zE4`
      }
    },
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

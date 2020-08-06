module.exports = {
  siteMetadata: {
    title: `The Bike Station Budapest`,
    description: `The Bike Station - kerékpár szervíz a 13. kerületben! Megbízható és rugalmas munkavégzés, korrekt áron.`,
    keywords: `kerékpár, szervíz, kerékpár szervíz, 13. kerület, XIII. kerület`,
    author: `@heydorka`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-force-trailing-slashes',
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`,`400`,`500`],
            subsets: [`latin`],
          }
        ],
      },
    },
    'gatsby-plugin-offline',
    /* {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-58489830-1",
      },
    }, */
  ],
}

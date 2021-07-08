module.exports = {
  siteMetadata: {
    title: 'Larkin Smith',
    siteUrl: 'https://www.larkindsmith.com',
    author: 'Larkin Smith',
    description: 'Larkin Smith is a software engineer in Brooklyn, NY.'
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Larkin D Smith`,
        short_name: `LDS`,
        start_url: `/`,
        background_color: `#00022e`,
        theme_color: `#fcfaf6`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      }
    },
    `gatsby-transformer-json`,
    "gatsby-plugin-sitemap",
  ],
};

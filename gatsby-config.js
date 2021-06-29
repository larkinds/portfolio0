module.exports = {
  siteMetadata: {
    title: 'Larkin Smith',
    siteURL: 'vigilant-mcclintock-3da656.netlify.app'

  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
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
    `gatsby-transformer-json`,
  ],
};

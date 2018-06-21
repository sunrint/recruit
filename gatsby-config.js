module.exports = {
  pathPrefix: '/recruit',
  siteMetadata: {
    title: '선린 채용정보',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/jobs`,
        name: 'jobs',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
        ]
      }
    },
  ],
}

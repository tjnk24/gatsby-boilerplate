// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: 'Title from siteMetadata',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@containers': path.resolve(__dirname, 'src/containers'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@common': path.resolve(__dirname, 'src/common'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/static/`,
      },
    },
  ],
};

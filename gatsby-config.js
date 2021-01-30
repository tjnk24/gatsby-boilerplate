// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: 'Title from siteMetadata',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          sourceMap: isDev,
          modules: {
            mode: 'local',
            localIdentName: '[local]--[hash:base64:5]',
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@containers': path.resolve(__dirname, 'src/containers'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@pages': path.resolve(__dirname, 'src/pages'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  ],
};

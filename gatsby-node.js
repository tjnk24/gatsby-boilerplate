exports.onCreateWebpackConfig = ({ stage, loaders, plugins, actions }) => {
  const isDev = process.env.NODE_ENV === 'development';

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.s(a|c)ss$/,
          use: [
            loaders.miniCssExtract({ hmr: false }),
            loaders.css({
              importLoaders: 1,
              camelCase: false,
              sourceMap: isDev,
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]',
              },
            }),
            loaders.postcss(),
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  });
};

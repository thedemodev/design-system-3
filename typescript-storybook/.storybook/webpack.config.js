const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loaders: [require.resolve('awesome-typescript-loader')]
      },
      {
        test: /\.story\.tsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ],
  },
};

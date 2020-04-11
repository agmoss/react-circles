const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'ts-loader',
      }],
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
    },
    ],
  },
  externals: {
    react: 'umd react',
  },
};

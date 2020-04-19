const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    publicPath: '/dist/',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
};

const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  devtool: 'source-map',
  entry: slsw.lib.entries,
  mode: 'development',
  externals: {
    'aws-sdk': 'aws-sdk',
  },
  resolve: {
    symlinks: false,
    extensions: ['.js', '.json', '.ts'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'ts-loader',
        options: {},
      },
    ],
  },
};

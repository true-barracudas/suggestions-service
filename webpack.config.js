const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'client/dist');
const APP_DIR = path.resolve(__dirname, 'client/src');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  watch: false,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // plugins: [
            //   'babel-plugin-styled-components',
            //   new CompressionPlugin(),
            // ],
            plugins: [
              ['babel-plugin-styled-components', {
                options: {
                  cache: true,
                  algorithm: 'gzip',
                  compressionOptions: {
                    level: 9,
                  },
                  filename: '[path][base].gz',
                  threshold: 0,
                  minRatio: 0.8,
                  deleteOriginalAssets: false,
                },
              }],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  mode: 'production',
};

module.exports = config;

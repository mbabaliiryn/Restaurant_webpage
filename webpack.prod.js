/* eslint-disable comma-spacing */
/* eslint-disable space-in-parens */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge( common,{
//   entry: './src/index.js',
  mode: 'production',
  // devtool: "none",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },
//   plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.html$/,
//         use: ['html-loader'],
//       },
//     ],
//   },
});

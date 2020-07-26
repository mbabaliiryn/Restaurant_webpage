/* eslint-disable comma-spacing */
/* eslint-disable space-in-parens */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge( common,{
//   entry: './src/index.js',
  mode: 'development',
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

/* eslint-disable comma-spacing */
/* eslint-disable space-in-parens */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge( common,{
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },
});

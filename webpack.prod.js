/* eslint-disable comma-spacing */
/* eslint-disable space-in-parens */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge( common,{
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },
});

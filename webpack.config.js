const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  // devtool: "none",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

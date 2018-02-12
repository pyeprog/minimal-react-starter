const path = require('path');
const webpack = require('webpack');

let entry1 = path.resolve(__dirname, 'src', 'index.js');
let outputPath = path.resolve(__dirname, 'dist', 'js');
let outputName = 'bundle.js';

var config = {
  entry: [entry1],

  output: {
    path: outputPath,
    filename: outputName
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = config;

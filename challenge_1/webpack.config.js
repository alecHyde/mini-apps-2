var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'index.js': path.resolve(__dirname, 'index.js')

  },

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      }
    ]
  }

}
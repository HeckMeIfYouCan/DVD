const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
  entry: {
    index: './src/index.js',
  },
  output: { 
    path: path.resolve('dist'), 
    filename: '[name].js'
  }, 
  module: { 
    rules: [ 
      { }
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ['index']
    })
  ]
  ,
  mode: 'development'
}
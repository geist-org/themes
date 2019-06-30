const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const util = require('./util')

module.exports = {
  entry: util.getEntry(),
  
  devtool: 'source-map',
  
  resolve: {
    extensions: ['.js', '.css', '.styl', '.stylus'],
  },
  
  module: {
    rules: [
      {
        test: /\.(styl|stylus|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },
}

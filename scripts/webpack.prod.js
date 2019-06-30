const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizePlugin = require('optimize-css-assets-webpack-plugin')
const util = require('./util')
const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  devtool: 'eval',

  mode: 'production',

  output: {
    path: util.join('dist'),
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    
    new OptimizePlugin({
      assetNameRegExp: /\.css\.*(?!.*map)/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: { removeAll: true },
        safe: true,
        autoprefixer: true,
      },
    }),
  ],
  
})

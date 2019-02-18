const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const config = merge(common, {
  mode: 'production',
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: '/public/',
    path: path.join(__dirname, '../dist')
  }
})

module.exports = config

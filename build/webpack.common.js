const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = {
  // 解析
  resolve: {
    extensions: ['.js', '.jsx'] // 自动解析确定的扩展
  },
  module: {
    rules: [
      { // 将jsx转换成 js
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      { // 将ES6语法转成 低版本语法
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [// 排除node_modules 下的js
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
}

module.exports = commonConfig

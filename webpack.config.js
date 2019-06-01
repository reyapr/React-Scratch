var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 entry: path.join(__dirname, './src/index.js'),
 output: {
  path: path.join(__dirname, './dist'),
  publicPath: '/',
  filename: 'bundle.js'
 },
 devServer: {
  publicPath: "/",
  contentBase: './dist'
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: ['babel-loader']
     }
   ]
 },
 plugins: [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "index.html"),
    filename: 'index.html',
    inject: 'body'
  })
]
}

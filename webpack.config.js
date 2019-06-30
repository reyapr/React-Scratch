var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/index.tsx'),
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"]
},
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
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: "awesome-typescript-loader"
        }]
      },
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

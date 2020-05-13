var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader','css-loader']
        },
        {
          test: /\.js$|.jsx$/,
          use: ['babel-loader'],
          exclude: /node-modules/
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
    })],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src')
      }
    }
}
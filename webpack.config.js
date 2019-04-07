/* eslint-disable @typescript-eslint/no-var-requires */
const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotenvPlugin = require('webpack-dotenv-plugin')
require('dotenv-extended').load()

const { APP_HOST, APP_PORT } = process.env

module.exports = {
  devServer: {
    host: APP_HOST,
    historyApiFallback: true,
    port: APP_PORT,
    allowedHosts: ['.lvh.me'],
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        loader: 'awesome-typescript-loader',
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: 'bundle.min.js',
    path: join(__dirname, '/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new DotenvPlugin({
      path: resolve(__dirname, '.env'),
      sample: resolve(__dirname, '.env.defaults'),
    }),
  ],
  resolve: {
    alias: {
      '@ec': resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}

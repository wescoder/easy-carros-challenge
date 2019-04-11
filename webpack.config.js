/* eslint-disable @typescript-eslint/no-var-requires */
const { join, resolve } = require('path')
const CopyPlugin = require('copy-webpack-plugin')
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
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.min.js',
    path: join(__dirname, '/dist'),
  },
  plugins: [
    new CopyPlugin([
      { from: './src/assets/**/*.{png,jpg,jpeg,gif,svg,ico}', to: join(__dirname, '/dist/assets') },
      { from: './src/site.webmanifest', to: join(__dirname, '/dist') },
      { from: './src/browserconfig.xml', to: join(__dirname, '/dist') },
      { from: './src/favicon.ico', to: join(__dirname, '/dist') },
    ]),
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

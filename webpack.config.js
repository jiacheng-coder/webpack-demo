/** @type {import('webpack').Configuration} */

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    search: "./src/search.js",
  },
  output: {
    filename: "[name].[contenthash:6].js", // [name]模板字符串
    path: __dirname + "/dist",
    clean: true,
  },
  plugins: [
    // 添加插件实例
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'less-loader'
          }
        ],
      },
      {
        test: /\.ts$/,
        use: [
          'ts-loader'
        ]
      }
    ],
  },
};

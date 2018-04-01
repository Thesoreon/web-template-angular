const webpackMerge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const commonConfig = require("../webpack.config.base.js");
const helpers = require("./helpers");

module.exports = webpackMerge(commonConfig, {
  devtool: "cheap-module-eval-source-map",

  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[id].chunk.js"
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: "tslint-loader"
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ],

  devServer: {
    historyApiFallback: true,
    port: 8080,
    stats: "minimal"
  }
});
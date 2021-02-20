const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "src/js/index.js"),
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "js/[id].[chunkhash].js",
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 90000,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader, //For development this is faster than using MinCSSExtractPlugin. For production the MinCSSExtractPlugin must be used.
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.styl$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      title: "Webpack Plugins",
      template: path.resolve(__dirname, "src/index.html"), //Optional template
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ],
};

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      node_modules: path.join(__dirname, "node_modules"),
      bower_modules: path.join(__dirname, "bower_modules"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js(\?.*$|$)/,
        use: "babel-loader",
      },
      {
        test: /\.css(\?.*$|$)/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif|woff|woff2|ttf|eot)?(\?.*$|$)/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:4000",
    }),
  },
};

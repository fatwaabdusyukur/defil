const { resolve } = require("path");
const { argv } = require("process");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = argv[3] === "production";

const fileExtensions = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "eot",
  "otf",
  "svg",
  "ttf",
  "woff",
  "woff2",
];

const plugins = [
  new CleanWebpackPlugin(),
  new CopyPlugin({
    patterns: [
      { from: "src/frontend/manifest.json", to: "manifest.json" },
      { from: "src/frontend/assets/img/logo.png", to: "img/logo.png" },
      { from: "src/frontend/assets/css/style.css", to: "style.css" },
    ],
  }),
];

if (isProduction) {
  plugins.push(
    new ZipPlugin({
      path: resolve(__dirname),
      filename: "bundle.zip",
    })
  );
}

module.exports = {
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : "cheap-module-source-map",
  entry: {
    content: resolve(__dirname, "src/frontend/content/content.js"),
    background: resolve(__dirname, "src/frontend/background/background.js")
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: new RegExp(`.(${fileExtensions.join("|")})$`),
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: plugins,
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/frontend"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
};

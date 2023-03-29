const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    app: './frontend/src/index.js'
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend/build/static/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }, {
      test: /\.(gif|svg|jpg|png)$/,
      loader: "file-loader",
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '.././css/styles.css'
    })
  ]
};
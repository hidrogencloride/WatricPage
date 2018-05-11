const HtmlWebPackPlugin = require("html-webpack-plugin");
const path =  require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,

        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /bootstrap\.native/,
          use: {
            loader: 'bootstrap.native-loader'
          }
      },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            include: "./src/static/images",
            loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
        },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
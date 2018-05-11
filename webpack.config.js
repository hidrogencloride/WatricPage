const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
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
                test: /\.(jpe?g|png|gif|svg)$/i,

                use: {
                    loader: 'url-loader?limit=30000&name=images/[name].[ext]'
                }
            },
            {
                test: /bootstrap\.native/,
                use: {
                    loader: 'bootstrap.native-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};
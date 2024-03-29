const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require('dotenv');
const config = require("./webpack.config");
const Dotenv = require('dotenv-webpack');

module.exports = merge(config, {
    mode: "development",
    output: {
        filename: "main.[fullhash].js",
        path: path.resolve(__dirname, "build"),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    "sass-loader"
                ],
                include: /\.module\.scss$/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    'css-loader',
                    "sass-loader"
                ],
                exclude: /\.module\.scss$/

            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            favicon: './public/favicon.ico',
        }),
        new Dotenv(),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'typeof window': JSON.stringify('object'),
            'process.env.NODE_ENV': JSON.stringify('development'),
            'REACT_ENV': JSON.stringify(dotenv.config().parsed),
        })
    ],
});

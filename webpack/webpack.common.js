const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

console.log('PATH - ', path.resolve());

module.exports = {
    name: 'client',
    entry: {
        'react-app-setup': path.resolve(__dirname, '..', './src/index.tsx')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js'],
        mainFields: ['source', 'module', 'main'],
        modules: [path.resolve('node_modules')],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                ],
            },
            {
                test: /\.(?:scss|css)$/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/inline',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: '[name]_[fullhash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '..', './public/index.html'),
            favicon: path.resolve(__dirname, '..', './public/images/favicon.ico'),
            showErrors: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name]_[fullhash].css',
            chunkFilename: '[id].css',
        }),
        new WebpackManifestPlugin({
            writeToFileEmit: true,
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
    stats: 'errors-only',
}
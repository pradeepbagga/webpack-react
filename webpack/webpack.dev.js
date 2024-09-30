const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 8000,
        open: true,
        hot: true,
    },
}
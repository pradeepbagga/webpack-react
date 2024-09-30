const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const envConfig = (env) => require(`./webpack.${env}.js`);

module.exports = (env) => {
    console.log('ENV - ', env);
    const { mode } = env;

    return merge(common, envConfig(mode));
}
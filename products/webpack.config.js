const HtmlWebpaclPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new HtmlWebpaclPlugin({
            template: './public/index.html'
        })
    ]
};
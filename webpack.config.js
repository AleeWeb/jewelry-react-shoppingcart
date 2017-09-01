const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=65536',
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'src/js',
            'node_modules'
        ]
    }
};

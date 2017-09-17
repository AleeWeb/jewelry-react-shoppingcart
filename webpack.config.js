const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//require('materialize-loader!./materialize.config.js');

module.exports = {
    entry: [
        path.join(__dirname, 'src', 'index.js'),
        'materialize-loader!./materialize.config.js'
    ],
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
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [
                    'css-loader'
                ]
            })
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            filename: 'index.html'
        }),
        new ExtractTextPlugin('styles-[contenthash].css')
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'src/js',
            'node_modules'
        ]
    }
};

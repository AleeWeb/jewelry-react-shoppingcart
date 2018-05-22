const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const entryPath = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'public/dist');
//require('materialize-loader!./materialize.config.js');

console.log('entryPath', entryPath);
module.exports = {
    entry: `${entryPath}/index.js`,
    output: {
        path: outputPath,
        filename: 'bundle.js'
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
            loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
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
        new ExtractTextPlugin('bundle.css')
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'src/js',
            'node_modules'
        ]
    }
};
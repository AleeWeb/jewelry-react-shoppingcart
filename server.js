const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddlware = require('webpack-dev-middleware');
const webpackHotMiddlware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');



const PORT = 3005;
const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddlware(compiler));
app.use(webpackHotMiddlware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.path,
    noInfo: false    //To prevent displaying compilation info on terminal
}));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.listen(PORT, function () {
    console.info('Server listening on port ' + PORT + '...');
});

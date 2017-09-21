const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const PORT = process.env.PORT || 3005;
const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.listen(PORT, function () {
    console.info('Server listening on port ' + PORT + '...');
});

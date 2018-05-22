const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const fallback = require('express-history-api-fallback');

const publicDir = 'public';
const PORT = process.env.PORT || 3005;
const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(publicDir));
app.use(fallback('index.html', { root: publicDir }));


app.listen(PORT, function () {
    console.info('Server listening on port ' + PORT + '...');
});

const Arrow = require('arrow');
const webpack = require('webpack');
const server = new Arrow();


const webpackConfig = require('./conf/webpack.config');

server.on('starting', function () {
    server.logger.debug('server is starting!');
});

server.on('started', function () {
    server.logger.debug('server started!');
});

server.start();

webpack(webpackConfig, (err, stats) => {
    err
    ? console.error(err)
    : console.log('build successful');
});
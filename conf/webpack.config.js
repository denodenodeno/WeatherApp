const path = require('path');

module.exports = {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: './web/src/index',
    target: 'web',
    output: {
        path: path.resolve('./web/public/js'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve('./web/src'),
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
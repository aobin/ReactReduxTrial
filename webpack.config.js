/**
 * Created by opinderjit on 6/9/16.
 */
var webpack = require('webpack');
var path = require('path');

const DEBUG = !process.argv.includes('--release');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './src/index'
    ],
    output: {
        filename: './dist/app.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ],
    },

    externals: {
        jquery: 'jQuery'
    },

    plugins: [
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery'
            })]
    ,

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
};
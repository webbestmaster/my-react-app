/* eslint-disable */
'use strict';

const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

const NODE_ENV = process.env.NODE_ENV || DEVELOPMENT;

const CWD = __dirname;

module.exports = {

    context: path.join(CWD, 'www'),
    entry: {
        'main': ['./app.js']
    },
    output: {
        path: path.join(CWD, 'dist'),
        filename: '[name].js'
    },

    watch: NODE_ENV === DEVELOPMENT,

    devtool: NODE_ENV === DEVELOPMENT ? 'source-map' : null,

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'stage-1', 'react'],
                    // plugins: ['transform-runtime'],
                    compact: false
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'stage-1', 'react']
                }
            }
        ]
    },

    resolve: {
        modulesDirectories: ['', 'www', 'node_modules'],
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]

};


/*
module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}



// This will make the redux-simpler-router module resolve to the
// latest src instead of using it from npm. Remove this if running
// outside of the source.
var src = path.join(__dirname, '..', '..', 'src')
var fs = require('fs')
if (fs.existsSync(src)) {
  // Use the latest src
  module.exports.resolve = { alias: { 'react-router-redux': src } }
  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: ['babel'],
    include: src
  });
}
*/

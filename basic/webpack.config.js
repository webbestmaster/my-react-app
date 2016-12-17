/* eslint-disable */
'use strict';

const path = require('path');

const webpack = require('webpack');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const keys = {
    env: {
        dev: 'development',
        prod: 'production'
    }
};

const NODE_ENV = process.env.NODE_ENV || keys.env.dev;

module.exports = {

    // context: __dirname + '/www',

    // entry: './home', // simple variant of 'entry: {..<several entry points>..}'
    entry: {
        // 'common': './js/common',
        'main': ['./app.js'] //, './css/main']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: '[name]'
    },

    watch: NODE_ENV === keys.env.dev,

  /*
   watchOptions: {
   aggregateTimeout: 100
   },
   */

    devtool: NODE_ENV === keys.env.dev ? 'source-map' : null,

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime'],
                    compact: false
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.dot$/,
                loader: 'dot'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    resolve: {
        modulesDirectories: ['', 'www', 'node_modules'],
        extensions: ['', '.js', '.jsx', '.json', '.scss', '.css', '.dot']
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new ExtractTextPlugin('main.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
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

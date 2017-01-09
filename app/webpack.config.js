'use strict';

const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

const NODE_ENV = process.env.NODE_ENV || DEVELOPMENT;

const CWD = __dirname;

module.exports = {

    context: path.join(CWD, 'www'),
    entry: {
        'common': './common',
        'main': ['./app.jsx']
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
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'stage-1', 'react'],
                    compact: false
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader?name=img/img-[name]-[hash:6].[ext]'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
            // {
            //     test: /\.raw\.[\s\S]+?$/,
            //     loader: "raw"
            // }
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
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2
        })
    ]

};

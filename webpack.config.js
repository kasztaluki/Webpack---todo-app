var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');
var env =process.env.NODE_ENV || 'development';

const path = require('path');

module.exports = {
    entry: [
          'react-hot-loader/patch',
          './src/index.js'
        ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                 test: /\.css$/,
                 use: [
                     { loader: 'style-loader'},
                     {
                         loader: 'css-loader',
                         options: {
                             modules: true
                         }
                      }
                    ]
                  }
              ]
        },


      plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeJsPlugin({
              sourceMap: false
            }),
        new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: 'index.html',
                inject: 'body'
            })
          ]
 }

  console.log('NODE_ENV:', env);
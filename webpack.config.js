const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[id].[hash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                use: [ 
                    { 
                        loader: 'file-loader', 
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    } 
                ],
            },
            {
                test: /\.(woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                use: [ 
                    { 
                        loader: 'url-loader', 
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    } 
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename: 'contacto.html',
            template: './src/contacto.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename: 'precios.html',
            template: './src/precios.html',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Popper: ['popper.js', 'default'],
        }),
        new MiniCSSExtractPlugin({
            filename: "styles.css",
        })
    ],
    devServer: {
        port: 5000
    }
};
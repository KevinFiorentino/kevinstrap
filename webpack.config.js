const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                //text: { test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
                test: /\.css|.scss|.(ttf|eot|otf|woff|svg)(\?v=[0-9]\.[0-9]\.[0-9])$/,
                loader: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                    { loader: 'file-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'contacto.html',
            template: './src/contacto.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'precios.html',
            template: './src/precios.html'
        })
    ],
    devServer: {
        port: 5000
    }
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const WebpackProvideGlobalPlugin = require('webpack-provide-global-plugin');


module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: [ 'file-loader' ]
            },
            {
                test: /\.(woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: [ 'url-loader' ]
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
        }),
        /*
        new WebpackProvideGlobalPlugin({
            Popper: ['popper.js', 'default']
        })
        */
    ],
    devServer: {
        port: 5000
    }
};
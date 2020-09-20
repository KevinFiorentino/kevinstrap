const webpack = require('webpack');
const path = require('path');

// Plugin para procesar las vistas
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Plugin para optimizar y ofuscar el JS
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Plugin para extraer el CSS del JS
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    // Definimos punto de entrada, filename y path final
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].bundle.js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    module: {
        // Definimos las distintas extensiones de archivos y con qué Loader se procesan
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
            jQuery: "jquery" //,
            //Popper: ['popper.js', 'default']
        }),
        new MiniCSSExtractPlugin({
            filename: "styles.css",
        })
    ],
    // Servidor corriendo en el puerto 5000 (npm run dev)
    devServer: {
        port: 5000
    }
};
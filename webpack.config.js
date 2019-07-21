let path = require('path');
let ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader', 'style-loader')
            },
            {
                test: /\.(jpe?g|png|gif|mp3)$/i,
                loaders: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.min.css', {
            allChunks: true
        })
    ]
};

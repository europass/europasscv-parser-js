const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');
const env = require('yargs').argv.env;

let libraryName = pkg.name;
let plugins = [
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin([ {from: './src/config.js', to:''} ])
];
let outputFile;

if (env === 'build') {
    outputFile = libraryName + '.js';
} else {
    outputFile = libraryName + '.js';
}

const config = {
    entry: __dirname + '/src/index.js',
    devtool: env === 'build' ? false : 'source-map',
    devServer: {
        contentBase: ['./src'],
        watchContentBase: true
    },
    optimization: {
        minimize: env === 'build' ? true : false
    },
    output: {
        path: __dirname + '/doc',
        filename: outputFile,
        library: 'EuropassParser',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: env === 'build' ? true : false }
                    }
                ]
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    },
    plugins: plugins
};

module.exports = config;
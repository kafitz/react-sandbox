const path = require('path')
const webpack = require('webpack')



module.exports = {
    context: __dirname,

    entry: {
        SandboxApp: 'SandboxApp.jsx'
    },

    output: {
        path: path.resolve('./dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },

    plugins: [],

    module: {
        loaders: [
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader' },
            { test: /\.s?css$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
        ]
    },

    resolve: {
        modules: ['node_modules', path.resolve('./src')],
        extensions: ['.js', '.jsx']
    }    
}
const path = require('path')
const webpack = require('webpack')
const Dashboard = require('webpack-dashboard')
const DashboardPlugin = require('webpack-dashboard/plugin')

const config = require('./webpack.base.config.js')

const dashboard = new Dashboard()


config.devtool = 'eval'

config.entry = {
    ForgigsApp: [
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        './src/sandboxApp.jsx'
    ]
}


config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(dashboard.setData)
])


config.module.loaders.push(
    { 
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        include: [
            path.resolve(__dirname, './src'), 
            path.resolve(__dirname, './node_modules/redux-auth/src/views/bootstrap')
        ],
        loaders: ['react-hot-loader', 'babel-loader']
    }
)

module.exports = config

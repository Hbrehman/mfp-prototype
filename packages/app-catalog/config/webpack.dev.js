const { merge } = require('webpack-merge') // merge two different webpack configs.
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8085/'
    },
    devServer: {
        port: 8085,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'catalog',
            filename: 'remoteEntry.js',
            exposes: {
                './CatalogApp': './src/bootstrap'
            },
            remotes: {
                container: 'container@http://localhost:8080/remoteEntry.js',
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig)


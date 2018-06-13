const webpack = require('webpack')
process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

environment.plugins.append(
  'DefinePlugin',
  new webpack.DefinePlugin({
    RAILS_ENV: JSON.stringify('production')
  })
)

module.exports = environment.toWebpackConfig()

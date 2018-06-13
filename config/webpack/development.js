const webpack = require('webpack')
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

environment.plugins.append(
  'DefinePlugin',
  new webpack.DefinePlugin({
    RAILS_ENV: JSON.stringify('development')
  })
)

module.exports = environment.toWebpackConfig()

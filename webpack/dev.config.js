const webpack = require('webpack')
const common = require('common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PORT = 3000

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server',
    common.entry.main
  ],

  output: Object.assign({}, common.output, {
    filename: '[name].js'
  }),

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new ExtractTextPlugin({
      filename: '[name].css'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"',
      }
    }),
    new HtmlPlugin(common.htmlPluginConfig),
  ],

  module: {
    rules: [
      common.jsLoader,
      common.fileLoader,
      common.urlLoader,
    ]
  },

  resolve: common.resolve
}

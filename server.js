const webpack = require('webpack')
const DevServer = require('webpack-dev-server')
const config = require('./webpack/dev.config')

const PORT = 3000

new DevServer(webpack(config), {
  publicPath: config.publicPath,
  hot: true,
  historyApiFallback: true,
  overlay: true,
  stats: { colors: true }
}).listen(PORT, error => {
  if (error) {
    console.error(error)
    process.exit(-1)
  }

  console.log(`Listening on http://localhost:${PORT}`)
})

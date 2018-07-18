const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  public: join(__dirname, '..', 'public'),
  build: join(__dirname, '..', 'build')
}

module.exports = {
  paths,
  entry: {
    main: join(paths.src, 'index')
  },

  output: {
    path: paths.build,
    filename: '[name]-[chunkhash].js',
    publicPath: '/'
  }
}

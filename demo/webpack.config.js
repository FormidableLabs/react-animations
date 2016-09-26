module.exports = {
  context: __dirname,
  entry: [
    './app.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: __dirname
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
};

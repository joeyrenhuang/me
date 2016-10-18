module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    publicPath: '/dist/',
    filename: "build.js"
  },
   resolve: {
    extensions: ['', '.js']
    // fallback: [path.join(__dirname, 'node_modules')],
  },
  module: {

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: "style!css!less"},
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
}
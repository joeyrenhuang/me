var webpack = require('webpack');
var path = require('path')
var assetsPath = function (_path) {
  return path.posix.join('static', _path)
}
console.log(__dirname)
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractLESS = new ExtractTextPlugin('static/css/[name].css');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "static/build.js"
  },
  resolve: {
    extensions: ['', '.js'],
    fallback:[path.join(__dirname, './node_modules')]
   
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
      // {test: /\.less$/, loader: "style!css!less"},
      { test: /\.less$/i, loader: extractLESS.extract(['css','less'], {
        // fix bug with  extractLESS = new ExtractTextPlugin('static/css/[name].css');    ***static/css***
        publicPath: '../../'
      })},
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          // name: 'img/[name].[ext]?[hash]'
          name: assetsPath('img/[name].[ext]?[hash]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          // name: 'fonts/[name].[hash:7].[ext]'
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',

  plugins:[

    extractLESS,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    })
  ]


  
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
    
  ])
}
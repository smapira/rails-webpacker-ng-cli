// Note: You must restart bin/webpack-watcher for changes to take effect

const webpack = require('webpack')
const path = require('path')
const process = require('process')
const glob = require('glob')
const extname = require('path-complete-extname')

let distDir = process.env.WEBPACK_DIST_DIR

if (distDir === undefined) {
  distDir = 'packs'
}

const config = {
  entry: glob.sync(path.join('app', 'javascript', 'packs', '*.js*')).reduce(
    (map, entry) => {
      const basename = path.basename(entry, extname(entry))
      const localMap = map
      localMap[basename] = path.resolve(entry)
      return localMap
    }, {}
  ),

  output: {
    filename: '[name].js',
    path: path.resolve('public', distDir),
    publicPath: '/' + distDir + '/',
  },

  module: {
    rules: [
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: "file-loader?name=images/[name].[ext]"
      },
      {test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml'},
      {test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff'},
      {test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff'},
      {test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff'},
      {test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff'},
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'to-string-loader'
        }, {
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false,
            removeComments: false,
            collapseWhitespace: false,
          }
        }],
      },
      {
        test: /.ts$/,
        loader: 'ts-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {test: /\.coffee(\.erb)?$/, loader: 'coffee-loader'},
      {
        test: /\.js(\.erb)?$/,
        exclude: [/\.(spec|e2e)\.js$/],
        loader: 'babel-loader',
        options: {
          presets: [
            ['latest', {es2015: {modules: false}}]
          ]
        }
      },
      {
        test: /\.erb$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'rails-erb-loader',
        options: {
          runner: 'DISABLE_SPRING=1 bin/rails runner'
        }
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery"
    })
  ],

  resolve: {
    extensions: ['.js', '.coffee', '.ts'],
    modules: [
      path.resolve('app/javascript'),
      path.resolve('node_modules')
    ],
  },

  resolveLoader: {
    modules: [path.resolve('node_modules')]
  },

}

module.exports = {
  distDir,
  config
}

process.traceDeprecation = true;

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var extractPlugin = new ExtractTextPlugin({
  filename: 'css/[name].css'
});

var config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR + '/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: [
            'react', ["env", {
            "targets": {
              "browsers": ["> 1%", "last 2 versions"]
            }
          }]],
        },
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract([{
          loader: 'css-loader',
          options: {
            importLoaders: 1
          },
        },{
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'not IE < 11')]
            },
          },
        },
        {
          loader: 'sass-loader',
        }])
      },
    ],
  },
  plugins: [
    extractPlugin
  ],
};

module.exports = config;
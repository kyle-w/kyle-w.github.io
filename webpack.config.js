var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  devtool: 'eval',

  entry: [
    './src/index.js',
    './src/index.html'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    loaders: [{
      test: /\.html?$/,
      loaders: ['html-loader', 'file-loader?name=[name].[ext]']
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader']
    },
    {
      test: /\.css$/,
      loader:  ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    {
      test: /\.(png|jpg|svg|gif)$/,
      loader: 'url?limit=14250'
    },
    {
      test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file?name=[name].[ext]'
    }
    // {
    //   test: /CNAME/,
    //   loader: 'file?name=CNAME'
    // }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
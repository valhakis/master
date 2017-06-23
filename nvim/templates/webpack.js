const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  paths: {
    app: './client/ruudi',
    dist: './dist'
  }
};

console.log(path.join(__dirname, config.paths.app, 'app.js'));
//'angular',
//'angular-animate',
//'angular-aria',
//'angular-cookies',
//'angular-resource',

//'angular-sanitize',

//'angular-ui-bootstrap',
//'angular-ui-router',
//'lodash',

module.exports = {
  // 0. development tool something, PS: build speed slower
  devtool: 'eval',
  // 1. define entry point
  entry: {
    app: path.join(__dirname, config.paths.app, 'app.js'),
    vendor: ['jquery', 'angular', 'moment', 'angular-ui-router']
  },
  // 2. define the output directory and file
  output: {
    path: path.join(__dirname, config.paths.dist),
    filename: '[name][chunkhash].bundle.js',
  },
  module: {
    preLoaders: [
      // 3. check for syntax errors 'jshint'
      {test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'}
    ],
    // 4. the loaders
    loaders: [
      // (4.1) babel loader | import | require | export | ...
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015']}},
      // (4.2) style and css loader | style-loader | css-loader
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      // (4.3) scss loader | node-sass | sass-loader
      {test: /\.scss/, loader: 'style-loader!css-loader!sass-loader'},
      // (4.4) hot refresh html
      {test: /\.html$/, loader: 'raw-loader'},
      // (4.5) files images
      {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)([\?]?.*)$/, loader: 'file'}
    ]
  },
  // 5. the development server
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    contentBase: path.join(__dirname, config.paths.dist),
    inline: true,
    open: false,
    hot: true,
    stats: {
      colors: true,
      errors: true,
      errorDetails: true,
    },
    historyApiFallback: true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, config.paths.app, 'index.html'),
      inject: 'body',
      //hash: true,
      //chunks: ['app']
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor')
  ],
};

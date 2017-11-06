var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: {
    'client': Loc.root('client/index.js'),
  },
  output: {
    path: Loc.root('public/dist'),
    filename: "[name].out.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader", query: { presets: ['es2015'] } },
      { test: /\.scss/,    loader: "style-loader!css-loader!sass-loader" },
      { test: /\.json$/,   loader: "json-loader" },
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.pug/,     loader: "pug-loader" },
      { test: /\.html/,     loader: "html-loader" },
      { test: /\.css$/,    loader: "style-loader!css-loader" },
      { test: /\.less$/,   loader: "style-loader!css-loader!less-loader" },
      { test: /\.jade$/,   loader: "jade-loader?self" },
      { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
      { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
      { test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
      { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
      { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
      { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
      { test: /\.svg$/,    loader: "file-loader?prefix=font/" },
      // { test: /\.tsx?$/,    loader: "awesome-typescript-loader" },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      minChunks(module, count) {
        var context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    //new CheckerPlugin(),
    // Workaround for angular/angular#11580
    //new webpack.ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    ///angular(\\|\/)core(\\|\/)@angular/,
    //App.root('demos/demo-01'), // location of your src
    //{} // a map of your routes
    //),
    //new webpack.optimize.CommonsChunkPlugin({
    //name: ['demo-01', 'vendor', 'polyfills']
    //})
    //new webpack.optimize.CommonsChunkPlugin({
    //name: 'common' // Specify the common bundle's name.
    //})
  ],
  resolve: {
    // extensions: ['.ts', '.tsx', '.js', '.jsx'],
    //alias: {
    //root: App.root('client')
    //}
  }
};

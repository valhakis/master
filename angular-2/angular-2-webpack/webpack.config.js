var webpack = require('webpack');
var helpers = require('./config/helpers');
var path = require('path');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   context: __dirname,
   devtool: 'eval-source-map',
   entry: {
      'client': './client/index.ts',
      'vendor': './client/vendor.ts',
      'polyfills': './client/polyfills.browser.ts'
   },
   output: {
      path: path.resolve('dist'),
      filename: "[name].out.js",
      chunkFilename: '[id].chunk.js',
      publicPath: 'http://192.168.0.2:3000/',
   },
   module: {
      rules: [
         test: /\.ts$/, use: [{loader: '@angular";"'}]
      ]
   },
   resolve: {
      modules: [
         path.resolve(__dirname, '../../node_modules')
      ],
      alias: {
         'bower_components': path.resolve(__dirname, '../../bower_components/')
      },
      extensions: ['.js', '.ts', '.json']
   },
   /*
   module: {
      loaders: [
         { test: /\.ts$/, loader: 'awesome-typescript-loader!angular2-template-loader' },
   // { test: /\.css$/, loader: "style!css" }, 
         { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader", query: { presets: ['es2015'] } },
         { test: /\.scss/,    loader: "style-loader!css-loader!sass-loader" },
   // { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' }) + '!raw-loader' },
         { test: /\.json$/,   loader: "json-loader" },
         { test: /\.coffee$/, loader: "coffee-loader" },
         { test: /\.pug/,     loader: "pug-loader" },
   // { test: /\.css$/,    loader: "style-loader!css-loader" },
         { test: /\.less$/,   loader: "style-loader!css-loader!less-loader" },
         { test: /\.jade$/,   loader: "jade-loader?self" },
         { test: /\.html$/,   loader: "html-loader" },
         { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
         { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
         { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
         { test: /\.svg$/,    loader: "file-loader?prefix=font/" },
         { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,    loader: "file-loader?name=assets/[name].[hash].[ext]" },
      ]
   },
   */
   devServer: {
      contentBase: 'dist',
      historyApiFallback: true,
      stats: 'minimal'
   },
   plugins: [
   /*
      new BrowserSyncPlugin({
         host: '192.168.0.2',
         port: '3000',
         server: {
            baseDir: ['dist']
         }
      }),
      new HtmlWebpackPlugin({
         chunks: ['client'],
         template: './client/index.pug',
         filename: './index.html'
      }),
   // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
   // The (\\|\/) piece accounts for path separators in *nix and Windows
         /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
         helpers.root('./src'), // location of your src
         {} // a map of your routes
      ),
      new webpack.optimize.CommonsChunkPlugin({
         name: ['app', 'vendor', 'polyfills']
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin('[name].css')
      */
]
};

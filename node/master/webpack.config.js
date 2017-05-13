var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var serverConfig = require('./server/config');

module.exports = {
   // root: __dirname,
   context: __dirname,
   devtool: 'eval-source-map',
   entry: {
      'client': './client/index.js',
      'angular-2': './client/angular2/index.js'
   },
   output: {
      path: __dirname + '/dist',
      filename: "[name].out.js"
   },
   module: {
      loaders: [
         { test: /\.js$/, loader: 'jshint-loader', enforce: 'pre', exclude: /(node_modules|bower_components)/ },
         // { test: /\.css$/, loader: "style-loader!css-loader" }, 
         { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader", query: { presets: ['es2015'] } },
         { test: /\.scss/,    loader: "style-loader!css-loader!sass-loader" },
         { test: /\.json$/,   loader: "json-loader" },
         { test: /\.coffee$/, loader: "coffee-loader" },
         { test: /\.pug/,     loader: "pug-loader", options: { root: __dirname + '/client' } },
         { test: /\.css$/,    loader: "style-loader!css-loader" },
         { test: /\.less$/,   loader: "style-loader!css-loader!less-loader" },
         { test: /\.jade$/,   loader: "jade-loader?self" },
         { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
         { test: /\.woff2$/,   loader: "url-loader?prefix=font/&limit=5000" },
         { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
         { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
         { test: /\.svg$/,    loader: "file-loader?prefix=font/" },
      ]
   },
   plugins: [
      new BrowserSyncPlugin({
         proxy: `${serverConfig.development.host}:${serverConfig.development.port}`
      }),
      new HtmlWebpackPlugin({
         chunks: ['node-static', 'client'],
         template: '!!pug-loader!./client/index.pug',
         // template: './client/index.html',
         favicon: './client/favicon.ico',
         filename: './index.html'
      }),
      new HtmlWebpackPlugin({
         chunks: ['angular2'],
         template: '!!pug-loader!./client/angular2/index.pug',
         // template: './client/index.html',
         favicon: './client/favicon.ico',
         filename: './angular2/index.html'
      }),
      new BundleAnalyzerPlugin({
         analyzerMode: 'static'
      }),
      new webpack.optimize.CommonsChunkPlugin({
         name: 'node-static',
         filename: 'node-static.js',
         minChunks(module, count) {
            var context = module.context;
            return context && context.indexOf('node_modules') >= 0;
         },
      }),
   ],
   resolve: {
      modules: [
         path.resolve(__dirname, '../../node_modules')
      ],
      alias: {
         'shared': path.resolve(__dirname, 'shared'),
         'bower_components': path.resolve(__dirname, '../../bower_components/')
      },
      extensions: ['.css', '.js']
   }
};

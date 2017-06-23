var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
   context: __dirname,
   devtool: 'eval-source-map',
   entry: {
      'app': './app/app.js',
   },
   output: {
      path: __dirname + '/dist',
      filename: '[name]-bundle.js',
      chunkFilename: '[name]-chunk.js',
      // publicPath: ''
   },
   module: {
      loaders: [
         { test: /.tsx?$/, loader: "ts-loader" }, 
         // { test: /\.css$/, loader: "style-loader!css-loader" }, 
         { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader", query: { presets: ['es2015'] } },
         { test: /\.scss/,    loader: "style-loader!css-loader!sass-loader" },
         { test: /\.json$/,   loader: "json-loader" },
         { test: /\.coffee$/, loader: "coffee-loader" },
         { test: /\.pug/,     loader: "pug-loader" },
         { test: /\.css$/,    loader: "style-loader!css-loader", options: { modules: true, import: true, root: __dirname + '/app' }},
         { test: /\.less$/,   loader: "style-loader!css-loader!less-loader" },
         { test: /\.jade$/,   loader: "jade-loader?self" },
         { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
         { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
         { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
         { test: /\.svg$/,    loader: "file-loader?prefix=font/" },
      ]
   },
   plugins: [
      new BrowserSyncPlugin({
         host: '192.168.0.2',
         port: '3000',
         server: {
            baseDir: ['dist']
         }
      }),
      new HtmlWebpackPlugin({
         chunks: ['node-static', 'app'],
         template: './app/index.html',
         favicon: './app/favicon.ico',
         filename: './index.html'
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
      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery"
      })
   ],
   resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
   }
};

var modules = {
   "webpack": "*",
   "style-loader": "*",
   "sass-loader": "*",
   "css-loader": "*",
   "node-sass": "*",
   "browser-sync": "*",
   "babel-core": "*",
   "babel-loader": "*",
   "babel-preset-es2015": "*",
   "pug-loader": "*",
   "pug": "*",
   "browser-sync-webpack-plugin": "*",
   "html-webpack-plugin": "*"
};


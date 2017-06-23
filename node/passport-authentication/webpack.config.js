var webpack = require('webpack');
var fs = require('fs');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
   context: __dirname,
   devtool: 'eval-source-map',
   entry: {
      'client': './client/index.js',
   },
   output: {
      path: __dirname + '/dist',
      filename: "[name].out.js"
   },
   module: {
      loaders: [
         { test: /\.css$/, loader: "style!css" }, 
         { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader", query: { presets: ['es2015'] } },
         { test: /\.scss/,    loader: "style-loader!css-loader!sass-loader" },
         { test: /\.json$/,   loader: "json-loader" },
         { test: /\.coffee$/, loader: "coffee-loader" },
         { test: /\.pug/,     loader: "pug-loader" },
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
      ]
   },
   plugins: [
      // new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new LiveReloadPlugin({
         key: fs.readFileSync('./keys/server-key.pem'),
         cert: fs.readFileSync('./keys/server-cert.pem'),
         passphrase: 'secret',
         protocol: 'https',
         hostname: '192.168.0.2',
         port: '5000',
      })
      // new webpack.NoErrorsPlugin()
   ]
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


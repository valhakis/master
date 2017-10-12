var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: {
    'client': './client/index.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: "[name].out.js"
  },
  module: {
    loaders: [
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
  ]
};


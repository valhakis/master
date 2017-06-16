var path = require('path');
var webpack = require('webpack');

const compiler = webpack({
   context: __dirname,
   devtool: 'eval-source-map',
   entry: {
      'client': './client/index.js',
   },
   output: {
      path: __dirname + '/dist',
      filename: "[name].out.js"
   },
  resolve: {
    modules: [
      path.resolve(__dirname, '../../../../node_modules')
    ],
    extensions: ['.jsx', '.js']
  }
});

const watching = compiler.watch({

}, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats.toString({
    chunks: false,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }));
});

var express = require('express');
var router = express.Router();

module.exports = router;

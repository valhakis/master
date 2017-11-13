var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: false,
  context: __dirname,
  entry: {
    'dist/client': './client/main.js',
    'dist/share': './client/share/index.js',
    'todo-app/dist/todo-app': './todo-app/src/index.js',
  },
  output: {
    path: path.join(__dirname),
    filename: "[name].out.js"
  },
  module: {
    rules: [
      { test: /\.(html)$/, loader: 'raw-loader' },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {}  
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: false
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: false,
            includePaths: ['node_modules/bootstrap-sass/assets/stylesheets', 'node_modules/bootstrap-sass']
          }
        }]
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'node-static',
      filename: 'dist/node-static.js',
      minChunks(module, count) {
        var context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
  ]
};

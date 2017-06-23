const webpack = require('webpack');
var path = require('path');

const compiler = webpack({
  context: App.root(''),
  devtool: 'eval-source-map',
  entry: {
    client: App.root('client/index.js')
  },
  module: { 
    loaders: [
      { test: /\.css$/,    loader: "style-loader!css-loader" },
      {test: /\.(jpe?g|png|gif|svg|woff2?|eot|ttf)$/i, loader: "file-loader?name=/public/icons/[name].[ext]"},
    ]
  },
  output: {
    path: App.root('dist'),
    filename: "[name].out.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
  ]
});

const watching = compiler.watch({

}, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats.toString({
    chunks: false,
    colors: true
  }));
});

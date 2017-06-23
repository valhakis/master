const webpack = require('webpack');
const webpackConfig = App.require('webpack.config');

const compiler = webpack(webpackConfig);
const watching = compiler.watch({

}, function(err, stats) {
   console.log(stats.toString({ colors: true }));
   // console.log(stats.toJson('minimal'));
});


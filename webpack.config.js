
module.exports = {
  context: __dirname + '/src',
  entry: __dirname + '/src/app.js',

  module: {
    loaders: [
        { test: /\.js$/, exclude: '/node_modules', loader: 'babel-loader'},
        { test: /\.scss$/, exclude: '/node_modules', loader: 'style-loader!css-loader!sass-loader'},
        { test: /\.json$/, exclude: '/node_modules', loader: 'json-loader'},
        { test: /\.html$/, loader: 'raw-loader'}
    ]
  },
  //support source maps
  devtool: "#inline-source-map"
};

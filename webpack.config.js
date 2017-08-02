module.exports = {
  entry: "./frontend/index.js",
	output: {
		path: __dirname,
    publicPath: '/',
		filename: "./bundle.js"
	},
  module: {
    loaders: [
		{test:/\.js$/, loader: 'babel-loader', query: {presets:[ 'es2015', 'react', 'stage-2' ]},exclude: /node_modules/},
		{test:/\.jsx?$/, loader: 'babel-loader', query: {presets:[ 'es2015', 'react', 'stage-2' ]}, exclude: /node_modules/},
		{test: /\.scss/,loader: 'style-loader!css-loader!sass-loader'}
    ]
  },
  devServer: {
    contentBase: "./",
    historyApiFallback: true
  }
}

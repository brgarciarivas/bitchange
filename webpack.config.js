var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var buildPath = path.resolve(__dirname, 'src')

module.exports = {
	entry: {
		bitchange: buildPath
	},
	output: {
		path: buildPath,
		filename: '[name]-bundle.js',
		pathinfo: true
	},
	resolve: {
		extensions: ['', '.jsx', '.js', '.css'],
		moduleDirectories: ['node_modules']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body'
		}),
		new webpack.ProvidePlugin({
			'Promise': 'es6-promise',
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
		new ExtractTextPlugin('app.css', {
			allChunks: true
		})
	],
	devtool: 'cheap-source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
			}
		]
	}
}
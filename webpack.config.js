const path = require('path');

module.exports = {
	entry: {
		'bundle': './src/index.jsx',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'build.js',
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				include: [
					path.resolve(__dirname, 'src'),
				],
				test: /\.jsx?$/,
				query: {
					plugins: ['transform-runtime', 'transform-class-properties'],
					presets: ['es2015', 'stage-2', 'react'],
				},
			},
			{
				loader: 'style!css',
				test: /\.css$/,
			},
			{
				loader: 'style!css!less',
				include: [
					path.resolve(__dirname, 'src/styles'),
				],
				test: /\.less$/,
			},
			{
				loader: 'file',
				test: /\.(eot|svg|ttf|woff2?)$/,
			},
		],
	},
	devtool: 'source-map',
};
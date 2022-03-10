const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { resolve } = require('path')
const { ProgressPlugin } = require('webpack')

const webpackConfig = {
	entry: {
		main: './src/index.ts',
	},
	output: {
		clean: true,
		filename: '[name].js',
		path: resolve(process.cwd(), 'dist'),
	},
	target: 'web',
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				options: {
					transpileOnly: true,
				},
				test: /\.(js|tsx?)$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
		],
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new	ProgressPlugin(),
	],
	devServer: {
		port: 9000,
		host: 'localhost',
		historyApiFallback: false,
		open: true,
		hot: true,
	},
}

module.exports = webpackConfig

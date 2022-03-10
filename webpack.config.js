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
		extensions: ['.ts'],
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
}

module.exports = webpackConfig

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');


module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.[contenthash].js',
		assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
	},
	module: {

		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
			},
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|gif|mp4|pdf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
				generator: {
					filename: path.join('icons', '[name].[contenthash][ext]'),
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/index.pug'),
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/about.pug'),
			filename: 'about.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/calc.pug'),
			filename: 'calc.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/catalog.pug'),
			filename: 'catalog.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/card-100-18.pug'),
			filename: 'card-100-18.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/card-80-18.pug'),
			filename: 'card-80-18.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/card-80-16.pug'),
			filename: 'card-80-16.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/card-60-18.pug'),
			filename: 'card-60-18.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/card-60-16.pug'),
			filename: 'card-60-16.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/card-60-12.pug'),
			filename: 'card-60-12.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/card-60-8.pug'),
			filename: 'card-60-8.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/card-40-8.pug'),
			filename: 'card-40-8.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/card-40-7.pug'),
			filename: 'card-40-7.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/card-30-6.pug'),
			filename: 'card-30-6.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/404.pug'),
			filename: '404.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/closed.pug'),
			filename: 'closed.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/privacy-policy.pug'),
			filename: 'privacy-policy.html',
		}),
		new FileManagerPlugin({
			events: {
				onStart: {
					delete: ['dist'],
				},
				onEnd: {
					copy: [
						{
							source: path.join('src', 'static'),
							destination: 'dist',
						},
					],
				},
			}
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
	devServer: {
		watchFiles: path.join(__dirname, 'src'),
		port: 9002,
	},
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 1 }],
							['svgo', { name: 'preset-default' }],
						],
					},
				},
			}),
		],
	},
};
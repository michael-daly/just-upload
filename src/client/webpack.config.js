const path    = require ('path');
const webpack = require ('webpack');


const MODE = 'development';


module.exports =
{
	entry: './js/main.js',

	output:
	{
		filename: 'bundle.js',
		path:     path.join (__dirname + '/dist'),
	},

	mode: MODE,

	module:
	{
		rules:
		[
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		]
	},

	resolve:
	{
		alias:
		{
			'~': path.resolve (__dirname, './js/'),
		},
	},
};

const path    = require ('path');
const webpack = require ('webpack');


const MODE = 'development';
const CLIENT_DIR = path.join (__dirname + '/src/client');


module.exports =
{
	entry: `${CLIENT_DIR}/js/main.js`,

	output:
	{
		filename: 'bundle.js',
		path:     `${CLIENT_DIR}/dist`,
	},

	mode: MODE,

	watchOptions:
	{
		ignored: ['**/node_modules', '**/src/server'],
	},

	module:
	{
		rules:
		[
			{
				test:    /\.jsx?$/,
				exclude: /node_modules/,
				loader:  'babel-loader',
			}
		]
	},

	resolve:
	{
		alias:
		{
			'~': path.resolve (__dirname, `${CLIENT_DIR}/js/`),
		},
	},
};

const path = require ('path');

const express = require ('express');
const bodyParser = require ('body-parser');
const fileUpload = require ('express-fileupload');

const { limits } = require ('../../cfg/common.config.js');

const app = express ();

app.use (bodyParser.json ());

app.use (fileUpload (
{
	limits:
	{
		fileSize: limits.fileSize,
	},

	abortOnLimit: true,
}));

app.use ('/', express.static (path.join (__dirname, '../client')));


module.exports = app;

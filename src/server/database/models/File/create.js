const randomString = require ('crypto-random-string');

const File = require ('./File.js');


const createFileEntry = async properties =>
{
	const
	{
		uploaderIP = null,
		mimetype = null,
		data = null,
		hasDeleteKey,
		showInRecentFiles,
	}
	= properties;

	if ( uploaderIP === null || data === null )
	{
		return null;
	}

	const entryProps =
	{
		key: randomString ({ length: 8, type: 'alphanumeric' }),

		uploaderIP,
		mimetype,
		data,
		showInRecentFiles,
	};

	if ( hasDeleteKey )
	{
		entryProps.deleteKey = randomString ({ length: 24, type: 'alphanumeric' });
	}

	return await File.create (entryProps);
};


module.exports = createFileEntry;

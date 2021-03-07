import { has } from '~/util.js';


class UploadModel
{
	static uploadOptions = Object.freeze (
	{
		hasDeleteKey: Object.freeze (
		{
			type: 'boolean',
			label: 'Generate delete key',
			defaultValue: true,
		}),

		showInRecentFiles: Object.freeze (
		{
			type: 'boolean',
			label: 'Show in recent files',
			defaultValue: false,
		}),
	});

	constructor ()
	{
		const options = {};
		const { uploadOptions } = UploadModel;

		for ( let key in uploadOptions )
		{
			options[key] = uploadOptions[key].defaultValue;
		}

		this.file = null;
		this.options = options;
		this.state = 'ready';
		this.error = '';
		this.subview = 'fileUpload';
		this.downloadKey = '';
		this.deleteKey = '';
	}

	setOption ( key, value )
	{
		if ( has (this.options, key) )
		{
			this.options[key] = value;
		}
	}

	getOption ( key )
	{
		return has (this.options, key) ? this.options[key] : null;
	}
}


export default UploadModel;

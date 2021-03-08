import { has } from '~/util.js';


const uploadOptions = Object.freeze (
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


const UploadModel =
{
	file: null,
	options: {},
	downloadKey: '',
	deleteKey: '',
	subview: 'upload',
	error: '',
	state: 'ready',

	uploadOptions,

	setOption ( key, value )
	{
		if ( has (this.options, key) )
		{
			this.options[key] = value;
		}
	},

	getOption ( key )
	{
		return has (this.options, key) ? this.options[key] : null;
	},
};

for ( let key in uploadOptions )
{
	UploadModel.options[key] = uploadOptions[key].defaultValue;
}


export default UploadModel;

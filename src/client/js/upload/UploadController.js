import m from 'mithril';
import axios from 'axios';

import AppController from '~/app/AppController.js';
import UploadModel from '~/upload/UploadModel.js';


const UploadController =
{
	onOptionChanged ( event )
	{
		const { target } = event;
		const { type } = target;

		let { value } = target;

		if ( type === 'checkbox' || type === 'radio' )
		{
			value = target.checked;
		}

		UploadModel.setOption (target.name, value);
	},

	onFileInput ()
	{
		UploadModel.state = 'loading';
	},

	onFileChanged ( event )
	{
		UploadModel.file = event.target.files[0];
		UploadModel.state = 'loaded';
	},

	onClickUpload ( event )
	{
		if ( UploadModel.file === null )
		{
			return;
		}

		UploadModel.state = 'uploading';

		const body = new FormData ();

		body.append ('file', UploadModel.file);
		body.append ('options', JSON.stringify (UploadModel.options));

		axios.post ('/upload', body).then (response =>
		{
			const { data } = response;

			UploadModel.state = 'success';
			UploadModel.subview = 'success';
			UploadModel.downloadKey = data.downloadKey;
			UploadModel.deleteKey = data.deleteKey;

			AppController.getRecentFiles ();
		})
		.catch (error =>
		{
			console.dir (error);

			UploadModel.state = 'error';
			UploadModel.error = error.message;
		})
		.finally (() =>
		{
			m.redraw ();
		});
	},
};


export default UploadController;

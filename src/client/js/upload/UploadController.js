import m from 'mithril';
import axios from 'axios';


class UploadController
{
	constructor ( model, view )
	{
		this.model = model;
		this.view = view;

		// Pre-bind methods so they're not bound every re-render.
		this.onFileInput = this.onFileInput.bind (this);
		this.onFileChanged = this.onFileChanged.bind (this);
		this.onOptionChanged = this.onOptionChanged.bind (this);
		this.onClickUpload = this.onClickUpload.bind (this);
	}

	onOptionChanged ( event )
	{
		const { target } = event;
		const { type } = target;

		let { value } = target;

		if ( type === 'checkbox' || type === 'radio' )
		{
			value = target.checked;
		}

		this.model.setOption (target.name, value);
	}

	onFileInput ()
	{
		this.model.state = 'loading';
	}

	onFileChanged ( event )
	{
		this.model.file = event.target.files[0];
		this.model.state = 'loaded';
	}

	onClickUpload ( event )
	{
		const { model } = this;

		if ( model.file === null )
		{
			return;
		}

		this.model.state = 'uploading';

		const body = new FormData ();

		body.append ('file', model.file);
		body.append ('options', JSON.stringify (model.options));

		axios.post ('/upload', body).then (response =>
		{
			model.error = 'File uploaded successfully';
			model.state = 'success';
		})
		.catch (error =>
		{
			console.dir (error);

			model.error = error.message;
			model.state = 'error';
		})
		.finally (() =>
		{
			m.redraw ();
		});
	}
}


export default UploadController;

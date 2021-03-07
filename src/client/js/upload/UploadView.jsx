import m from 'mithril';

import UploadModel from '~/upload/UploadModel.js';
import UploadController from '~/upload/UploadController.js';
import Checkbox from '~/Checkbox.jsx';


class UploadView
{
	constructor ()
	{
		this.model = new UploadModel ();
		this.controller = new UploadController (this.model, this);
	}

	view ()
	{
		const { model, controller } = this;

		const options = [];
		const { uploadOptions } = UploadModel;

		for ( let key in uploadOptions )
		{
			options.push (
				<Checkbox
					label={uploadOptions[key].label}
					name={key}
					value={model.getOption (key)}
					onchange={controller.onOptionChanged}
				/>
			);
		}

		const disableButton = model.file === null ||
		                      model.state === 'uploading' ||
		                      model.state === 'error';

		return (
			<div>
				<input
					type='file'
					oninput={controller.onFileInput}
					onchange={controller.onFileChanged}
				/>

				{options}

				<input
					type='button'
					onclick={controller.onClickUpload}
					value='Upload'
					disabled={disableButton}
				/>

				<div>
					<strong>{model.error}</strong>
				</div>
			</div>
		);
	}
}


export default UploadView;

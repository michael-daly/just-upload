import m from 'mithril';

import UploadModel from '~/upload/UploadModel.js';
import Checkbox from '~/Checkbox.jsx';


const FileUploadView =
{
	view ( component )
	{
		const { model, controller } = component.attrs;

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
	},
};


export default FileUploadView;

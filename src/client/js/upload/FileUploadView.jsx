import m from 'mithril';

import UploadModel from '~/upload/UploadModel.js';
import Checkbox from '~/Checkbox.jsx';


const FileUploadView =
{
	view ( component )
	{
		const { model, controller } = component.attrs;

		const options = [];
		const disableControls = model.state === 'loading' || model.state === 'uploading';

		const { uploadOptions } = UploadModel;

		for ( let key in uploadOptions )
		{
			options.push (
				<Checkbox
					label={uploadOptions[key].label}
					name={key}
					value={model.getOption (key)}
					onchange={controller.onOptionChanged}
					disabled={disableControls}
				/>
			);
		}

		return (
			<div>
				<input
					type='file'
					oninput={controller.onFileInput}
					onchange={controller.onFileChanged}
					disabled={disableControls}
				/>

				{options}

				<input
					type='button'
					value='Upload'
					onclick={controller.onClickUpload}
					disabled={model.file === null || model.state !== 'loaded'}
				/>

				<div>
					<strong>{model.error}</strong>
				</div>
			</div>
		);
	},
};


export default FileUploadView;

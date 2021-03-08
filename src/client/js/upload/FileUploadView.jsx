import m from 'mithril';

import UploadModel from '~/upload/UploadModel.js';
import UploadController from '~/upload/UploadController.js';

import Checkbox from '~/misc/Checkbox.jsx';


const FileUploadView =
{
	view ()
	{
		const options = [];
		const disableControls = UploadModel.state === 'loading' || UploadModel.state === 'uploading';

		const { uploadOptions } = UploadModel;

		for ( let key in uploadOptions )
		{
			options.push (
				<Checkbox
					label={uploadOptions[key].label}
					name={key}
					value={UploadModel.getOption (key)}
					onchange={UploadController.onOptionChanged}
					disabled={disableControls}
				/>
			);
		}

		return (
			<div>
				<input
					type='file'
					oninput={UploadController.onFileInput}
					onchange={UploadController.onFileChanged}
					disabled={disableControls}
				/>

				{options}

				<input
					type='button'
					value='Upload'
					onclick={UploadController.onClickUpload}
					disabled={UploadModel.file === null || UploadModel.state !== 'loaded'}
				/>

				<div>
					<strong>{UploadModel.error}</strong>
				</div>
			</div>
		);
	},
};


export default FileUploadView;

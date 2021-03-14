import m from 'mithril';
import filesize from 'filesize';

import UploadModel from '~/upload/UploadModel.js';
import UploadController from '~/upload/UploadController.js';

import { limits } from '~/cfg/common.config.js';


const FileUploadView =
{
	view ()
	{
		const options = [];
		const disableControls = UploadModel.state === 'loading' ||
		                        UploadModel.state === 'uploading';

		const { uploadOptions, file } = UploadModel;

		for ( let key in uploadOptions )
		{
			const { label } = uploadOptions[key];

			options.push (
				<div class='control'>
					<label class='checkbox'>
						<input
							type='checkbox'
							name={key}
							checked={UploadModel.getOption (key)}
							onchange={UploadController.onOptionChanged}
							disabled={disableControls}
						/>

						{' ' + label}
					</label>
				</div>
			);
		}

		return (
			<div>
				<div class='block'>
					<div class='columns is-centered'>
						<div class='file column is-narrow'>
							<div class='mb-2'>
								<small>{file === null ? 'No file selected.' : file.name}</small>
							</div>

							<label class='file-label'>
								<input
									class='file-input'
									type='file'
									oninput={UploadController.onFileInput}
									onchange={UploadController.onFileChanged}
									disabled={disableControls}
								/>

								<span class='file-cta'>Choose File</span>
							</label>
						</div>
					</div>

					<div class='field is-horizontal'>
						<div class='field-body'>
							<div class='field'>
								{options}
							</div>
						</div>
					</div>

					<small>Max file size is {filesize (limits.fileSize)}</small>
				</div>

				<div>
					<input
						class='button is-primary'
						type='button'
						value='Upload'
						onclick={UploadController.onClickUpload}
						disabled={file === null || UploadModel.state !== 'loaded'}
					/>
				</div>

				<div class='block'>
					<strong>{UploadModel.error}</strong>
				</div>
			</div>
		);
	},
};


export default FileUploadView;

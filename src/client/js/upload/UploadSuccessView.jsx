import m from 'mithril';

import UploadModel from '~/upload/UploadModel.js';


const UploadSuccessView =
{
	view ( component )
	{
		const { downloadKey = null, deleteKey = null } = component.attrs;

		let downloadLink = '';
		let deleteLink = '';

		if ( downloadKey !== null )
		{
			downloadLink = `/download/${downloadKey}`;
		}

		if ( deleteKey !== null && downloadKey !== null )
		{
			deleteLink = `/delete/${downloadKey}?deleteKey=${deleteKey}`;
		}

		return (
			<div>
				<div>
					<strong>Upload Successful!</strong>
				</div>
				{
					downloadLink === '' ? '' :
					<div>
						<label>Download Link: </label>
						<a href={downloadLink}>{window.location.host + downloadLink}</a>
					</div>
				}
				{
					deleteLink === '' ? '' :
					<div>
						<label>Deletion Link: </label>
						<a href={deleteLink}>{window.location.host + deleteLink}</a>
					</div>
				}

				<div>
					<input
						type='button'
						value='Upload Another File'
						onclick={() => UploadModel.subview = 'upload'}
					/>
				</div>
			</div>
		);
	},
};


export default UploadSuccessView;

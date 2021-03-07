import m from 'mithril';


const UploadSuccessView =
{
	view ( component )
	{
		const { model, downloadKey = null, deleteKey = null } = component.attrs;

		let downloadLink = '';
		let deleteLink = '';

		if ( downloadKey !== null )
		{
			downloadLink = `/dl/${downloadKey}`;
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
						onclick={() => model.subview = 'fileUpload'}
					/>
				</div>
			</div>
		);
	}
};


export default UploadSuccessView;

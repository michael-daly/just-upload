import m from 'mithril';


const UploadSuccessView =
{
	view ( component )
	{
		const { downloadKey = null, deleteKey = null } = component.attrs;

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
						<strong>Download Link:</strong>
						<a href={downloadLink}>{window.location.host + downloadLink}</a>
					</div>
				}
				{
					deleteLink === '' ? '' :
					<div>
						<strong>Deletion Link:</strong>
						<a href={deleteLink}>{window.location.host + deleteLink}</a>
					</div>
				}
			</div>
		);
	}
};


export default UploadSuccessView;

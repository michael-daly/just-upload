import m from 'mithril';

import UploadModel from '~/upload/UploadModel.js';
import UploadController from '~/upload/UploadController.js';

import FileUploadView from '~/upload/FileUploadView.jsx';
import UploadSuccessView from '~/upload/UploadSuccessView.jsx';


const UploadView =
{
	view ()
	{
		const { subview } = UploadModel;

		let title;
		let component;

		switch ( subview )
		{
			case 'upload':
			{
				title = 'Upload a File';
				component = <FileUploadView />;
				break;
			}

			case 'success':
			{
				title = 'Upload Successful';
				component = <UploadSuccessView
					downloadKey={UploadModel.downloadKey}
					deleteKey={UploadModel.deleteKey}
				/>;

				break;
			}

			default:
			{
				title = 'Oops!';
				component = `Unknown subview \`${subview}\``;
				break;
			}
		}

		return (
			<div>
				<h4 class='title is-4 has-text-centered'>{title}</h4>
				{component}
			</div>
		);
	},
};


export default UploadView;

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

		let component;

		switch ( subview )
		{
			case 'upload':
			{
				component = <FileUploadView />;
				break;
			}

			case 'success':
			{
				component = <UploadSuccessView
					downloadKey={UploadModel.downloadKey}
					deleteKey={UploadModel.deleteKey}
				/>;

				break;
			}

			default:
			{
				component = `Unknown subview \`${subview}\``;
				break;
			}
		}

		return component;
	},
};


export default UploadView;

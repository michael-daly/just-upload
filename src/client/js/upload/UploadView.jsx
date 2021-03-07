import m from 'mithril';

import UploadModel from '~/upload/UploadModel.js';
import UploadController from '~/upload/UploadController.js';
import FileUploadView from '~/upload/FileUploadView.jsx';


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
		const { subview } = model;

		let component;

		switch ( subview )
		{
			case 'fileUpload':
			{
				component = <FileUploadView model={model} controller={controller} />;
				break;
			}

			default:
			{
				component = `Unknown subview \`${subview}\``;
				break;
			}
		}

		return component;
	}
}


export default UploadView;

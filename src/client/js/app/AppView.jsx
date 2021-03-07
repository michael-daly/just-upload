import m from 'mithril';

import AppModel from '~/app/AppModel.js';
import UploadView from '~/upload/UploadView.jsx';


const AppView =
{
	view ()
	{
		const { subview } = AppModel;

		let viewComponent;

		switch ( subview )
		{
			case 'home':
			{
				viewComponent = <UploadView />;
				break;
			}

			default:
			{
				`Unknown subview \`${subview}\``;
				break;
			}
		}

		return viewComponent;
	},
};


export default AppView;

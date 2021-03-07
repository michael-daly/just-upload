import m from 'mithril';

import AppModel from '~/app/AppModel.js';
import UploadView from '~/upload/UploadView.jsx';


const AppView =
{
	view ()
	{
		const { view } = AppModel;

		let viewComponent = 'Unknown view';

		switch ( view )
		{
			case 'home':
			{
				viewComponent = <UploadView />;
				break;
			}

			default:
			{
				break;
			}
		}

		return viewComponent;
	},
};


export default AppView;

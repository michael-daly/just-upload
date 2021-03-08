import m from 'mithril';

import AppModel from '~/app/AppModel.js';

import UploadView from '~/upload/UploadView.jsx';
import RecentFilesView from '~/misc/RecentFilesView.jsx';


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
				viewComponent = `Unknown subview \`${subview}\``;
				break;
			}
		}

		return <div>{viewComponent} <RecentFilesView /></div>;
	},
};


export default AppView;

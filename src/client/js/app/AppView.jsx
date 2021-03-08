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
				return (
					<div>
						<UploadView />
						<RecentFilesView />
					</div>
				);
			}

			default:
			{
				return `Unknown subview \`${subview}\``;
			}
		}
	},
};


export default AppView;

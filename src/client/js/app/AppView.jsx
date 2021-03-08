import m from 'mithril';

import AppModel from '~/app/AppModel.js';

import UploadView from '~/upload/UploadView.jsx';
import RulesView from '~/misc/RulesView.jsx';
import RecentFilesView from '~/misc/RecentFilesView.jsx';

import Navbar from '~/misc/Navbar.jsx';


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

			case 'rules':
			{
				viewComponent = <RulesView />;
				break;
			}

			default:
			{
				viewComponent = `Unknown subview \`${subview}\``;
				break;
			}
		}

		return (
			<div>
				<Navbar />
				{viewComponent}
				<RecentFilesView />
			</div>
		);
	},
};


export default AppView;

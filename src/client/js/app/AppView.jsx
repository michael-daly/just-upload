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

				<div class='columns is-centered'>
					<div class='column is-two-fifths'>
						<div class='box box-primary'>
							{viewComponent}
						</div>
					</div>
				</div>

				<div class='columns is-centered'>
					<div class='column is-one-third'>
						<div class='box'>
							<RecentFilesView />
						</div>
					</div>
				</div>
			</div>
		);
	},
};


export default AppView;

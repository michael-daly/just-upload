import m from 'mithril';

import AppModel from '~/app/AppModel.js';

import UploadView from '~/upload/UploadView.jsx';
import RulesView from '~/misc/RulesView.jsx';
import RecentFilesView from '~/misc/RecentFilesView.jsx';
import NotFoundView from '~/errorPages/NotFoundView.jsx';

import Navbar from '~/misc/Navbar.jsx';


const AppView =
{
	view ()
	{
		const { subview } = AppModel;

		let viewComponent;
		let showRecentFiles = true;

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

			case '404':
			{
				viewComponent = <NotFoundView />;
				showRecentFiles = false;
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

				<section class='section'>
					<div class='columns is-centered is-vcentered'>
						<div class='column has-text-centered'>
							<a onclick={() => m.route.set ('/')}>
								<img src='./img/logo.png' style={{ height: '8rem' }}>
									<h1 class='title is-1'>Just Upload</h1>
								</img>
							</a>
							<h4 class='subtitle'>
								No ads, no sign-ups, no data collection
							</h4>
						</div>
					</div>

					<div class='columns is-centered is-vcentered'>
						<div class='column is-two-fifths'>
							<div class='box box-primary'>
								{viewComponent}
							</div>
						</div>
					</div>

					{
						!showRecentFiles
							? ''
							: <div class='columns is-centered'>
								<div class='column is-one-third'>
									<div class='box'>
										<RecentFilesView />
									</div>
								</div>
							</div>
					}
				</section>
			</div>
		);
	},
};


export default AppView;

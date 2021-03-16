import 'regenerator-runtime/runtime.js';
import '~/styles/main.scss';

import m from 'mithril';

import AppView from '~/app/AppView.jsx';
import UploadView from '~/upload/UploadView.jsx';
import RulesView from '~/misc/RulesView.jsx';
import NotFoundView from '~/errorPages/NotFoundView.jsx';


m.route.prefix = '';

m.route (document.getElementById ('app-root'), '/404',
{
	'/':
	{
		render ()
		{
			return (
				<AppView showRecentFiles={true}>
					<UploadView />
				</AppView>
			);
		},
	},

	'/rules':
	{
		render ()
		{
			return (
				<AppView showRecentFiles={true}>
					<RulesView />
				</AppView>
			);
		},
	},

	'/404':
	{
		render ()
		{
			return (
				<AppView showRecentFiles={false}>
					<NotFoundView />
				</AppView>
			);
		},
	},
});

import 'regenerator-runtime/runtime.js';

import m from 'mithril';

import AppView from '~/app/AppView.jsx';


m.route.prefix = '';

m.route (document.getElementById ('app-root'), '/',
{
	'/':
	{
		view ()
		{
			return <AppView view='upload' />;
		},
	},
});

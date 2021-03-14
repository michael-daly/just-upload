import 'regenerator-runtime/runtime.js';

import m from 'mithril';

import '~/styles/main.scss';

import AppView from '~/app/AppView.jsx';
import AppModel from '~/app/AppModel.js';


m.route.prefix = '';

m.route (document.getElementById ('app-root'), '/',
{
	'/':
	{
		onmatch ()
		{
			AppModel.subview = 'home';
			return AppView;
		},
	},

	'/rules':
	{
		onmatch ()
		{
			AppModel.subview = 'rules';
			return AppView;
		},
	},

	'/404':
	{
		onmatch ()
		{
			AppModel.subview = '404';
			return AppView;
		},
	},
});

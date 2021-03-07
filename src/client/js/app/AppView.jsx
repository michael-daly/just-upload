import m from 'mithril';

import UploadView from '~/upload/UploadView.jsx';


const AppView =
{
	view ( component )
	{
		const { view } = component.attrs;

		let viewComponent = 'Unknown view';

		switch ( view )
		{
			case 'upload':
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

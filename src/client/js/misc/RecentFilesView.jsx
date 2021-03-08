import m from 'mithril';

import AppModel from '~/app/AppModel.js';
import AppController from '~/app/AppController.js';

import FileList from '~/misc/FileList.jsx';


const RecentFilesView =
{
	oninit ()
	{
		AppController.getRecentFiles ();
	},

	view ()
	{
		const showLoading = AppModel.isLoadingFiles && AppModel.files.length <= 0;

		return (
			<div>
				<h2>Recently Upload Files</h2>
				{showLoading ? 'Loading...' : <FileList files={AppModel.files} />}
			</div>
		);
	},
};


export default RecentFilesView;

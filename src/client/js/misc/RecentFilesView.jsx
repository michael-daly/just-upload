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
				<h4 class='title is-4'>Recently Upload Files</h4>

				<div class='box is-centered has-text-centered'>
					<div class='block columns is-centered'>
						<div class='column is-narrow'>
						{
							showLoading ? <div class='loading-spinner' /> :
								<FileList files={AppModel.files} />
						}
						</div>
					</div>
				</div>
			</div>
		);
	},
};


export default RecentFilesView;

import m from 'mithril';

import RecentFilesModel from '~/recentFiles/RecentFilesModel.js';
import RecentFilesController from '~/recentFiles/RecentFilesController.js';


class RecentFilesView
{
	constructor ()
	{
		this.model = new RecentFilesModel ();
		this.controller = new RecentFilesController (this.model, this);
	}

	oninit ()
	{
		this.controller.getRecentFiles ();
	}

	view ()
	{
		const { files } = this.model;

		return (
			<div>
				<h1>Recent Files</h1>

				<div>
					<ul>
					{
						files.map (( data, index ) => (
							<li><a href={`/download/${data.downloadKey}`}>{data.name}</a></li>
						))
					}
					</ul>
				</div>
			</div>
		);
	}
}


export default RecentFilesView;

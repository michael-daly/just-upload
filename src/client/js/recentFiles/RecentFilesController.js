import m from 'mithril';
import axios from 'axios';


class RecentFilesController
{
	constructor ( model )
	{
		this.model = model;
	}

	async getRecentFiles ()
	{
		const { model } = this;

		return axios.get ('/recent').then (response =>
		{
			model.error = '';
			model.files = response.data;
		})
		.catch (error =>
		{
			model.error = error.message;
			model.files = [];
		})
		.finally (() =>
		{
			m.redraw ();
		});
	}
}


export default RecentFilesController;

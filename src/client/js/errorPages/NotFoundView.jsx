import m from 'mithril';


const NotFoundView =
{
	view ()
	{
		return (
			<div class='block p-1 pb-2'>
				<h4 class='title is-4 has-text-centered'>Page Not Found</h4>

				<div class='columns is-centered'>
					<div class='column is-narrow'>
						The page you requested has been moved or does not exist.
					</div>
				</div>
			</div>
		);
	},
};


export default NotFoundView;

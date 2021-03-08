import m from 'mithril';


const Navbar =
{
	view ({ attrs })
	{
		const { isFixed = false } = attrs;

		const style = {};

		if ( isFixed )
		{
			style.position = 'fixed';
		}

		return (
			<table style={style}>
				<thead>
					<tr>
						<th onclick={() => m.route.set ('/')}>Upload</th> | 
						<th onclick={() => m.route.set ('/rules')}>Rules</th>
					</tr>
				</thead>
			</table>
		);
	},
};


export default Navbar;

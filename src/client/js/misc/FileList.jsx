import m from 'mithril';


const FileList =
{
	createItem ( file )
	{
		return (
			<td class={'file-list-item'}>
				<a href={`/download/${file.downloadKey}`}>
					{file.name}
				</a>
			</td>
		);
	},

	view ( component )
	{
		const { files = [] } = component.attrs;
		const { length } = files;

		const rows = [];

		for ( let i = 0; i < length; i += 2 )
		{
			const row = [this.createItem (files[i])];

			if ( i < length - 1 )
			{
				row.push (this.createItem (files[i + 1]));
			}

			rows.push (<tr>{row}</tr>);
		}

		return (
			<table class='table'>
				{rows.length <= 0 ? 'No files to display.' : rows}
			</table>
		);
	}
};


export default FileList;

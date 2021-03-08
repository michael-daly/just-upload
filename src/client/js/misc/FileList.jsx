import m from 'mithril';


const FileList =
{
	view ( component )
	{
		const { files = [] } = component.attrs;

		return (
			<ul>
			{
				files.length <= 0 ? 'No files to display.' : files.map (( data, index ) => (
					<li><a href={`/download/${data.downloadKey}`}>{data.name}</a></li>
				))
			}
			</ul>
		);
	}
};


export default FileList;

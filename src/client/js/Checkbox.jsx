import m from 'mithril';


const Checkbox =
{
	view ({ attrs = {} })
	{
		const { value, name, label = null, onchange = () => {} } = attrs;

		const input = <input type='checkbox' name={name} onchange={onchange} checked={value} />;

		if ( label !== null )
		{
			return <div>{input} {label}</div>;
		}

		return input;
	},
};


export default Checkbox;

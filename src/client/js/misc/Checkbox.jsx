import m from 'mithril';


const Checkbox =
{
	view ({ attrs = {} })
	{
		const { value, name, label = null, onchange = () => {}, disabled = false } = attrs;

		const input = <input
			type='checkbox'
			name={name}
			checked={value}
			onchange={onchange}
			disabled={disabled}
		/>;

		if ( label !== null )
		{
			return <div>{input} {label}</div>;
		}

		return input;
	},
};


export default Checkbox;

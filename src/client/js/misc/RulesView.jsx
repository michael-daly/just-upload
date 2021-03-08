import m from 'mithril';

import config from '~/config.js';


const RulesView =
{
	view ()
	{
		const { rules } = config;
		const { length } = rules;

		const ruleComponents = [];

		for ( let i = 0; i < length; i++ )
		{
			ruleComponents.push (<li>{rules[i]}</li>);
		}

		return (
			<div>
				<h2>Rules</h2>
				<ol>{ruleComponents}</ol>
			</div>
		);
	},
};


export default RulesView;

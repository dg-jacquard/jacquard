'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'https://atemp.xyz'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/dg-jacquard'
	},
	{
		label: 'Blog',
		url: 'https://blog.atemp.xyz'
	},
	{
		label: 'Contact',
		url: 'https://atemp.xyz/contact'
	},
	{
		label: 'Unicorns!',
		async action() {
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn1.gif')));
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn2.gif')));
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn3.gif')));
		}
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I’m a full-stack developer making things like mobile apps, CLI tools, and websites.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);

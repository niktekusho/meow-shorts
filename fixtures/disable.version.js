#!/usr/bin/env node

const meow = require('meow');

const meowShorts = require('..');

const sampleApp = meow('test', {
	flags: {
		vtest: {
			alias: 'v',
			type: 'boolean'
		}
	}
});

meowShorts(sampleApp, {
	enableVersionShortcut: false
});

console.log(sampleApp.flags.v);

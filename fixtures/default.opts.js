#!/usr/bin/env node

const meow = require('meow');

const meowShorts = require('..');

const sampleApp = meow({
	help: 'HELP!',
	pkg: {
		name: 'local-npm-config',
		version: '0.1.0'
	}
});
meowShorts(sampleApp);

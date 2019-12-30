#!/usr/bin/env node

const meow = require('meow');

const meowShorts = require('..');

const sampleApp = meow({
	pkg: {
		name: 'local-npm-config',
		version: '0.1.0'
	}
});

meowShorts(sampleApp, {
	updateOptions: {
		updateCheckInterval: 0
	}
});

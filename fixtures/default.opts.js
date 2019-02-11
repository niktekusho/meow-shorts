#!/usr/bin/env node

const meow = require('meow');

const meowShorts = require('..');

const sampleApp = meow('test');
meowShorts(sampleApp);

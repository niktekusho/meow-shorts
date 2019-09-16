import * as meow from 'meow';
import {expectType} from 'tsd';

const meowShorts = require('.');

expectType<void>(meowShorts(meow('test')));

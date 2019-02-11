import {expectType} from 'tsd-check';
import meowShorts from '.';
import * as meow from 'meow';

expectType<void>(meowShorts(meow('test')));

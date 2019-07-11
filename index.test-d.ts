import {expectType} from 'tsd';
import meowShorts from '.';
import * as meow from 'meow';

expectType<void>(meowShorts(meow('test')));

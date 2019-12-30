import * as meow from 'meow';
import {expectType} from 'tsd';

import * as meowShorts from '.';

expectType<void>(meowShorts(meow('test')));

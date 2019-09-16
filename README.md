# meow-shorts

[![License](https://img.shields.io/github/license/niktekusho/meow-shorts.svg?style=flat)](./LICENSE)
[![](https://img.shields.io/npm/v/meow-shorts.svg)](https://www.npmjs.com/package/meow-shorts)
[![Build Status](https://travis-ci.org/niktekusho/meow-shorts.svg?branch=master)](https://travis-ci.org/niktekusho/meow-shorts)
[![](https://img.shields.io/node/v/meow-shorts.svg)](https://www.npmjs.com/package/meow-shorts)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![](https://img.shields.io/bundlephobia/minzip/meow-shorts.svg)](https://bundlephobia.com/result?p=meow-shorts)

This library is a wrapper for the [faboulous meow](https://github.com/sindresorhus/meow) that enables a few shortcuts:

-  `-h` for ``--help``
-  `-v` for ``--version``

Basically this library calls `showHelp()` and `showVersion()` when the command arguments contain either '-h' or '-v' respectively.

**This is a module built ad-hoc for meow, so this is the reason why meow is a peer dependency for this project.**

## Install

### `npm`

```
$ npm install meow meow-shorts
```

### `yarn`

```
$ yarn add meow meow-shorts
```

## Usage

```js
#!/usr/bin/env node

const meow = require('meow');
const meowShorts = require('meow-shorts');

const cli = meow(`
    Usage
      $ foo <input>

    Options
      --rainbow, -r  Include a rainbow

    Examples
      $ foo unicorns --rainbow
      🌈 unicorns 🌈
`, {
    flags: {
        rainbow: {
            type: 'boolean',
            alias: 'r'
        }
    }
});

meowShorts(cli);

// Regular usage
```


## API

### meowShorts(cli, [options])

Wraps the object returned handling help and version shortcuts.

#### cli

Type: `meow.Result`

The object returned from meow(...) invocation.

#### options

Type: `Object`

##### enableHelpShortcut

Type: `boolean`<br>
Default: `true`

Explicitly disable the '-h' shortcut to the 'help' command.

##### enableVersionShortcut

Type: `boolean`<br>
Default: `true`

Explicitly disable the '-v' shortcut to the 'version' command.

##### helpShortcutExitCode

Type: `number`<br>
Default: `undefined`

Set a custom exit code for the 'help' command. If you don't override this, this module reverts to the [default meow exit code](https://github.com/sindresorhus/meow/blob/master/readme.md#meowoptions) (which is `2`).

## License

MIT © [Nicola Dal Maso](./LICENSE)

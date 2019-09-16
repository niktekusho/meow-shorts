import { Result } from 'meow';
import meow = require('meow');

/**
 * Wrap the object created by the meow function in order to enable shortcuts for:
 *
 * -  help: using the '-h' CLI flag;
 * -  version: using the '-v' CLI flag.
 *
 * Using the options object argument you can control what to enable and how you want to exit from the help command.
 *
 * @param cli Meow's returned object.
 * @param options Options
 */
declare function wrap(cli: meow.Result, options?: wrap.Options): void;

declare namespace wrap {
	/**
	 * Control which features to enable/disable for this module.
	 */
	export interface Options {
		/**
		 * Explicitly disable the '-h' shortcut to the 'help' command.
		 */
		enableHelpShortcut?: boolean;
		/**
		 * Explicitly disable the '-v' shortcut to the 'version' command.
		 */
		enableVersionShortcut?: boolean;
		/**
		 * Set a custom exit code for the 'help' command.
		 * The default on meow's side is `2`.
		 */
		helpShortcutExitCode?: number;
	}
}

export = wrap;

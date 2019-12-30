import meow = require('meow');
import {Options as MinimistOptions} from 'minimist-options';

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
declare function wrap<Flags extends MinimistOptions>(cli: meow.Result<Flags>, options?: wrap.Options): void;

declare namespace wrap {
	/**
	 * Handle the options passed to the `update-notifier` package.
	 */
	export interface UpdateNotificationOptions {
		/**
		 * How often to check for updates in milliseconds.
		 * @default `1000 * 60 * 60 * 24` aka 1 day
		 */
		updateCheckInterval?: number;
		/**
		 * Overrides the default update notification message.
		 */
		message?: string;
	}

	/**
	 * Control which features to enable/disable for this module.
	 */
	export interface Options {
		/**
		 * Explicitly enable or disable the '-h' shortcut to the 'help' command.
		 * @default true
		 */
		enableHelpShortcut?: boolean;
		/**
		 * Explicitly enable or disable the '-v' shortcut to the 'version' command.
		 * @default true
		 */
		enableVersionShortcut?: boolean;
		/**
		 * Explicitly enable or disable the update notification.
		 * @default true
		 */
		enableUpdateCheck?: boolean;
		/**
		 * Set a custom exit code for the 'help' command.
		 * Please note that the default value on meow's side is `2`.
		 * @default undefined
		 */
		helpShortcutExitCode?: number;
		/**
		 * Allows partial options override in `update-notifier`.
		 * @default undefined
		 */
		updateOptions?: UpdateNotificationOptions;
	}
}

export = wrap;

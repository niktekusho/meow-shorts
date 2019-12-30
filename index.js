function wrap(cli, options) {
	const opts = {
		enableHelpShortcut: true,
		enableVersionShortcut: true,
		enableUpdateCheck: true,
		helpShortcutExitCode: undefined,
		updateOptions: undefined,
		...options
	};

	// Initiate update checking regardless of the command given by the user.
	if (opts.enableUpdateCheck) {
		const updateNotifier = require('update-notifier');
		updateNotifier({pkg: cli.pkg, ...opts.updateOptions}).notify(opts.updateOptions);
	}

	if (opts.enableHelpShortcut && cli.flags.h) {
		// Return is unnecessary since showHelp exits the process.
		cli.showHelp(opts.helpShortcutExitCode);
	}

	if (opts.enableVersionShortcut && cli.flags.v) {
		// Return is unnecessary since showVersion exits the process.
		cli.showVersion();
	}
}

module.exports = wrap;

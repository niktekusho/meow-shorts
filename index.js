function wrap(cli, options) {
	const opts = {
		enableHelpShortcut: true,
		enableVersionShortcut: true,
		helpShortcutExitCode: undefined,
		...options
	};

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

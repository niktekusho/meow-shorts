function wrap(cli, options) {
	const opts = {
		enableHelpShortcut: true,
		enableVersionShortcut: true,
		helpShortcutExitCode: undefined,
		...options
	};

	if (opts.enableHelpShortcut && cli.flags.h) {
		cli.showHelp(opts.helpShortcutExitCode);
	}

	if (opts.enableVersionShortcut && cli.flags.v) {
		cli.showVersion();
	}
}

module.exports = wrap;

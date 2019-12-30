import test from 'ava';

const execa = require('execa');

test('on default options should exit on -h flag with exit code 2', async t => {
	try {
		await execa('fixtures/default.opts.js', ['-h']);
		t.fail('Promise should reject since meow\'s default exit code for help command is 2.');
	} catch (error) {
		t.is(error.exitCode, 2);
		t.true(error.stdout.includes('HELP!'));
	}
});

test('on default options should exit on -v flag with exit code 2', async t => {
	try {
		const {stdout} = await execa('fixtures/default.opts.js', ['-v']);
		t.true(stdout.includes('0.1.0'));
	} catch (_) {
		t.fail('Promise should NOT reject since meow\'s default exit code for version command is 0.');
	}
});

test('on default options should check for updates (not really testable)', async t => {
	try {
		await execa('fixtures/default.opts.js', ['-v']);
		t.pass();
	} catch (_) {
		t.fail('Promise should NOT reject since meow\'s default exit code for version command is 0.');
	}
});

test('with disabled help option should NOT exit on -h flag', async t => {
	await execa('fixtures/disable.help.js', ['-h']);
	t.pass('Promise should resolve since \'showHelp\' is not called');
});

test('with disabled version option should NOT exit on -v flag', async t => {
	const {stdout} = await execa('fixtures/disable.version.js', ['-v']);
	t.is(stdout, 'true');
});

test('with disabled update check option the check should not be done', async t => {
	try {
		await execa('fixtures/disable.update.js', []);
		t.pass();
	} catch (_) {
		t.fail('Promise should NOT reject since meow\'s default exit code for version command is 0.');
	}
});

test('update options should be passed to the notifier module', async t => {
	try {
		await execa('fixtures/custom.update.options.js', []);
		t.pass();
	} catch (_) {
		t.fail('Promise should NOT reject since meow\'s default exit code for version command is 0.');
	}
});

test('should exit with custom exit code when using -h flag', async t => {
	const {exitCode} = await execa('fixtures/custom.help.status.code.js', ['-h']);
	t.is(exitCode, 0);
});

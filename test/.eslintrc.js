module.exports = {
	'env': {
		'mocha': true
	},
	'plugins': [
		'mocha'
	],
	'rules': {
		'mocha/no-exclusive-tests': 'error',
		'mocha/no-pending-tests': 'error',
		'mocha/no-skipped-tests': 'error',
		'mocha/handle-done-callback': 'error',
		'mocha/no-global-tests': 'error',
		'mocha/valid-test-description': 'warn',
		'mocha/valid-suite-description': ['warn', /[a-z]/i],
		'mocha/no-mocha-arrows': 'error',
		'mocha/no-sibling-hooks': 'error',
		'mocha/no-top-level-hooks': 'error',
		'mocha/no-identical-title': 'warn',
		'mocha/max-top-level-suites': 'error',
		'mocha/no-nested-tests': 'error'
	}
};

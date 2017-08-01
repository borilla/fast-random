module.exports = {
	'env': {
		'node': true
	},
	'extends': 'eslint:recommended',
	'rules': {
		'array-bracket-spacing': ['error', 'always'],
		'block-spacing': ['error'],
		'brace-style': ['error', 'stroustrup', {
			'allowSingleLine': true
		}],
		'camelcase': ['error', {
			'properties': 'never'
		}],
		'comma-spacing': ['error', {
			'before': false,
			'after': true
		}],
		'curly': ['error', 'all'],
		'eol-last': ['error'],
		'indent': ['error', 'tab'],
		'key-spacing': ['error', {
			'beforeColon': false,
			'afterColon': true
		}],
		'linebreak-style': ['error', 'unix'],
		'new-parens': ['error'],
		'newline-after-var': ['error', 'always'],
		'no-console': ['warn'],
		'no-else-return': ['warn'],
		'no-eq-null': ['error'],
		'no-eval': ['error'],
		'no-extra-bind': ['warn'],
		'no-invalid-this': ['error'],
		'no-labels': ['warn'],
		'no-lone-blocks': ['warn'],
		'no-loop-func': ['error'],
		'no-multi-spaces': ['error'],
		'no-new': ['warn'],
		'no-shadow': ['warn'],
		'no-spaced-func': ['error'],
		'no-throw-literal': ['warn'],
		'no-trailing-spaces': ['error'],
		'no-unmodified-loop-condition': ['warn'],
		'no-unused-expressions': ['error'],
		'no-warning-comments': ['warn'],
		'no-with': ['error'],
		'object-curly-spacing': ['error', 'always'],
		'quotes': ['warn', 'single'],
		'semi': ['error', 'always'],
		'space-before-function-paren': ['error', {
			'anonymous': 'always',
			'named': 'never'
		}],
		'vars-on-top': ['error']
	}
};

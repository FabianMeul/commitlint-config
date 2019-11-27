// Commitlint Configuration
// Reference: https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
// -------------------------------------------------------------------------- /

module.exports = {
	extends: [
		'@commitlint/config-conventional',
	],

	rules: {
		'scope-case': [
			2,
			'always',
			['lower-case', 'camel-case', 'kebab-case', 'pascal-case'],
		],
		'subject-case': [
			2,
			'never',
			['start-case', 'pascal-case'],
		],
	},
};

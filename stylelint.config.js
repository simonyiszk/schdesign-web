module.exports = {
	extends: [
		"stylelint-config-recommended",
		"stylelint-config-recommended-scss",
		"stylelint-config-prettier",
	],
	plugins: ["stylelint-order", "stylelint-scss", "stylelint-prettier"],
	rules: {
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"screen",
				],
			},
		],
		"declaration-block-trailing-semicolon": null,
		"no-descending-specificity": null,

		"order/properties-alphabetical-order": true,
		"scss/at-rule-no-unknown": null,
		"scss/at-import-no-partial-leading-underscore": null,
	},
};

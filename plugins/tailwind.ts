export function square({ addVariant, matchUtilities, theme }) {
	addVariant('hocus', ['&:hover', '&:focus']);
	// Square utility
	matchUtilities(
		{
			square: (value) => ({
				width: value,
				height: value
			})
		},
		{ values: theme('spacing') }
	);
}

import type { Preview } from '@storybook/svelte';
import '../src/app.css';

import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},

	decorators: [
		withThemeByClassName({
			themes: {
				// nameOfTheme: 'classNameForTheme',
				light: '',
				dark: 'dark'
			},
			defaultTheme: 'dark'
		})
	]
};

export default preview;

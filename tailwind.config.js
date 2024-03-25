import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

import { square } from './plugins/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				magnum: {
					50: '#fff9ed',
					100: '#fef2d6',
					200: '#fce0ac',
					300: '#f9c978',
					400: '#f7b155',
					500: '#f38d1c',
					600: '#e47312',
					700: '#bd5711',
					800: '#964516',
					900: '#793a15',
					950: '#411c09'
				},
				torquise: {
					50: '#e6f7f7',
					100: '#c2e8e8',
					200: '#9ed9d9',
					300: '#7acaca',
					400: '#56bbbb',
					500: '#32acac',
					600: '#289595',
					700: '#1f7a7a',
					800: '#165f5f',
					900: '#0d4545',
					950: '#031a1a'
				},
				primary: {
					50: '#f9f5f9',
					100: '#f2eaf2',
					200: '#e0cde0',
					300: '#c8adc8',
					400: '#b18db1',
					500: '#986d98',
					600: '#7d527d',
					700: '#633963',
					800: '#4a294a',
					900: '#301030',
					950: '#130813'
				}
			},
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'Arial',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol'
				],
				mono: [
					'ui-monospace',
					'SFMono-Regular',
					'SF Mono',
					'Menlo',
					'Consolas',
					'Liberation Mono',
					'monospace'
				]
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						code: {
							position: 'relative',
							borderRadius: theme('borderRadius.md')
						}
					}
				}
			})
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1440px'
			}
		}
	},

	plugins: [
		typography,
		forms,
		plugin(function ({ addVariant, matchUtilities, theme }) {
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
		})
	]
};

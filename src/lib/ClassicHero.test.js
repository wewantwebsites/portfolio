import { render, screen } from '@testing-library/svelte/svelte5';
import { test } from 'vitest';
import ClassicHero from './ClassicHero.svelte';

test('renders with label', async ({ expect }) => {
	render(ClassicHero, { props: { label: 'Hello' } });
	expect(screen.queryAllByText('Hello')).toHaveLength(1);
});

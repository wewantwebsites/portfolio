import { render, screen } from '@testing-library/svelte/svelte5';
import { expect, test } from 'vitest';
import OutlineCard from './OutlineCard.svelte';

test('renders the card with props', async () => {
	render(OutlineCard, { props: { heading: 'Hello', subheading: 'World' } });

	expect(screen.getByText('Hello')).toBeInTheDocument();
	expect(screen.getByText('World')).toBeInTheDocument();
});

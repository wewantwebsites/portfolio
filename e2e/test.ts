import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('http://cg4.dev/');
	const title = page.locator('h1');

	expect(await title.innerText()).toBe('Casimer A Guzdziol IV');
});

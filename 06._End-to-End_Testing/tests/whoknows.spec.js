const { test, expect } = require('@playwright/test');

test('can search and creates a query string', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('Search...').fill('this is a search test');
    await page.getByRole('button', { name: 'Search' }).click();
    expect(page.url()).toContain('/?q=this+is+a+search+test');
});
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	use: {
		baseURL: 'http://localhost:4568',
	},
	projects: [
		{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
		{ name: 'firefox', use: { ...devices['Desktop Firefox'] } },
		{ name: 'webkit', use: { ...devices['Desktop Safari'] } },
	],
});
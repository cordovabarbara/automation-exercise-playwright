import { test, expect } from '@playwright/test';
test('Verify that the home page is displayed', async ({ page }) => {

  // Navigate to the application
  await page.goto('/');

  // Verify page title
  await expect(page).toHaveTitle(/Automation Exercise/);

  // Verify home page is visible
  await expect(page).toHaveURL(/automationexercise\.com/);

  await expect(
    page.getByRole('link', { name: 'Home'})
  ).toBeVisible (); 

});

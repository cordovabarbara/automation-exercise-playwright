import { test, expect } from '@playwright/test';

  test.describe( 'Home page' , () => {

    test.beforeEach (async ({ page }) => {
      await page.goto ('/');
});

test('Verify that the home page is displayed', async ({ page }) => {

  //Verify page title
  await expect(page).toHaveTitle(/Automation Exercise/);

  // Verify applicayion URL
  await expect(page).toHaveURL(/automationexercise\.com/);

  // Verify link is visible
  await expect(
    page.getByRole('link', { name: 'Home', exact: true})
  ).toBeVisible (); 

});

  });

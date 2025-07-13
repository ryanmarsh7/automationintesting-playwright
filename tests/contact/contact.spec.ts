import { test, expect } from '../../fixtures/pageFixtures';

test.describe('Contact Page Tests', () => {
  test('Submit contact form successfully', async ({ contactPage }) => {
    await contactPage.goto();
    await contactPage.submitContactForm(
      'Ryan Marsh',
      'Ryan_marsh7@hotmail.com',
      '07123456789',
      'Booking query',
      'Please contact me about my booking.'
    );
    await contactPage.assertSuccessMessageVisible();
  });
});

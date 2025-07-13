// tests/home/homePage.spec.ts

import { test } from '../../fixtures/pageFixtures';

test.describe('Home Page Tests', () => {
  test('Verify homepage loads correctly and key elements are visible', async ({ homePage }) => {
    await homePage.goto();
    await homePage.assertPageLoaded();
    await homePage.assertBookRoomPresent();
    await homePage.assertContactLinkPresent();
    await homePage.assertAvailabilityFormPresent();
  });
});

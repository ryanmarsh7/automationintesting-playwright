// tests/home/checkAvailability.spec.ts

import { test, expect } from '../../fixtures/pageFixtures';

test('Home page - select check-in and check-out dates and check availability', async ({ homePage }) => {
  await homePage.goto();

  const today = new Date();
  const inFiveDays = new Date();
  inFiveDays.setDate(today.getDate() + 5);

  await homePage.checkAvailability(today, inFiveDays);

  // Confirm that there are available rooms displayed
  await homePage.assertAvailableRoomsVisible();
});
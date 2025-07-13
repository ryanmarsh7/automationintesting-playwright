// tests/end-to-end/reservationFlow.spec.ts
import { test } from '../../fixtures/pageFixtures';
import { formatDateForCalendarOption } from '../../utils/dateUtils';

test('E2E: Book a room from availability to confirmation', async ({ homePage, reservationPage, page }) => {
  // Step 1: Navigate to homepage
  await homePage.goto();

  // Step 2: Select dynamic check-in and check-out dates
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + 7);

  const formattedCheckIn = formatDateForCalendarOption(today);
  const formattedCheckOut = formatDateForCalendarOption(futureDate);

  await homePage.checkInInput.click();
  await page.getByRole('option', { name: formattedCheckIn }).click();

  await homePage.checkOutInput.click();
  await page.getByRole('option', { name: formattedCheckOut }).click();

  // Step 3: Check availability
  await homePage.checkAvailabilityButton.click();

  // Step 4: Wait for and select the first available room

  await homePage.clickFirstRoomBookNow();


  //step 5: Click reserve button
    await reservationPage.clickReserveButton();

  // Step 6: Fill out the booking form
  await reservationPage.fillReservationForm(
    'Xander',
    'Marsh',
    'Xaxa.Roman@example.com',
    '07729455027'
  );

  // Step 7: Submit the form
  await reservationPage.clickReserveButton();

  // Step 8: Assert the success message
  await reservationPage.assertSuccessMessageVisible();

  // Step 9: Assert the return home button is visible and click it
  await reservationPage.assertReturnHomeButtonVisible();
  await reservationPage.clickReturnHomeButton();

  // Step 10: Assert we are back on the homepage
  await homePage.assertPageLoaded();
});

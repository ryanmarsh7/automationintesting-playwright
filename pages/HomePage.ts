// src/pages/HomePage.ts

import { expect, Locator, Page } from '@playwright/test';
import { formatDateForCalendarOption } from '../utils/dateUtils';

export class HomePage {
  readonly page: Page;
  readonly navMenu: Locator;
  readonly welcomeImage: Locator;
  readonly bookRoomButton: Locator;
  readonly footer: Locator;
  readonly contactLink: Locator;
  readonly availabilityForm: Locator;
  readonly checkInInput: Locator;
  readonly checkOutInput: Locator;
  readonly checkAvailabilityButton: Locator;
  readonly roomImages: Locator;
  readonly roomBookNowLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navMenu = page.locator('nav');
    this.welcomeImage = page.getByRole('heading', { name: 'Welcome to Shady Meadows B&B' })
    this.bookRoomButton = page.getByRole('link', { name: 'Book Now', exact: true });
    this.footer = page.locator('footer');
    this.contactLink = page.locator('#navbarNav').getByRole('link', { name: 'Contact' })
    this.availabilityForm = page.getByText('Check Availability & Book Your StayCheck InCheck OutCheck Availability')
    this.checkInInput = page.locator('div').filter({ hasText: /^Check In$/ }).getByRole('textbox')
    this.checkOutInput = page.locator('div').filter({ hasText: /^Check Out$/ }).getByRole('textbox')
    this.checkAvailabilityButton = page.getByRole('button', { name: 'Check Availability' })
    this.roomImages = page.getByRole('img', { name: 'Single Room' });
    this.roomBookNowLinks = page
  .locator('div')
  .filter({ hasText: /^£\d+/ }) // Only divs starting with price
  .getByRole('link', { name: 'Book now' }); // Only room booking buttons
  }

  // Navigate to the homepage
  async goto() {
    await this.page.goto('/');
  }

  // Assertions to verify the homepage is loaded correctly
  async assertPageLoaded() {
    await expect(this.welcomeImage).toBeVisible();
    await expect(this.navMenu).toBeVisible();
    await expect(this.footer).toBeVisible();
  }

    // Assertions for key elements on the homepage
  async assertBookRoomPresent() {
    await expect(this.bookRoomButton).toBeVisible();
  }

  // Assertions for the contact link
  async assertContactLinkPresent() {
    await expect(this.contactLink).toBeVisible();
  }

  // Assertions for the availability form
  async assertAvailabilityFormPresent() {
    await expect(this.availabilityForm).toBeVisible();
  }

  async selectCheckInAndOutDates(checkIn: Date, checkOut: Date) {
    const checkInLabel = formatDateForCalendarOption(checkIn);
    const checkOutLabel = formatDateForCalendarOption(checkOut);

    await this.checkInInput.click();
    await this.page.getByRole('option', { name: checkInLabel }).click();

    await this.checkOutInput.click();
    await this.page.getByRole('option', { name: checkOutLabel }).click();
  }

  async checkAvailability(checkIn: Date, checkOut: Date) {
    await this.selectCheckInAndOutDates(checkIn, checkOut);
    await this.checkAvailabilityButton.click();
  }

  async assertAvailableRoomsVisible() {
    const count = await this.roomImages.count();
    expect(count).toBeGreaterThan(0); // Or use toBeVisible() if preferred
}
async clickFirstRoomBookNow() {
  await expect(this.roomBookNowLinks.first()).toBeVisible();
  await this.roomBookNowLinks.first().click();
}
}

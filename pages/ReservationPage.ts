import { expect, Locator, Page } from '@playwright/test';

export class ReservationPage {
  readonly page: Page;
  readonly reserveButton: Locator;
  readonly guestFirstName: Locator;
  readonly guestLastName: Locator;
  readonly guestEmail: Locator;
  readonly guestPhone: Locator;
  readonly successMessage: Locator;
  readonly returnHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reserveButton = page.getByRole('button', { name: 'Reserve Now' })
    this.guestFirstName = page.getByRole('textbox', { name: 'Firstname' })
    this.guestLastName = page.getByRole('textbox', { name: 'Lastname' })
    this.guestEmail = page.getByRole('textbox', { name: 'Email' })
    this.guestPhone = page.getByRole('textbox', { name: 'Phone' })
    this.successMessage = page.getByRole('textbox', { name: 'Phone' })
    this.returnHomeButton = page.getByRole('link', { name: 'Return home' })
  }

  async fillReservationForm(
    firstname: string,
    lastName: string,
    email: string,
    phone: string
  ) {
    await this.guestFirstName.fill(firstname);
    await this.guestLastName.fill(lastName);
    await this.guestEmail.fill(email);
    await this.guestPhone.fill(phone);
  }

  async clickReserveButton(){
    await this.reserveButton.click();
  }

  async assertSuccessMessageVisible() {
    await expect(this.successMessage).toBeVisible();
  }

  async assertReturnHomeButtonVisible() {
    await expect(this.returnHomeButton).toBeVisible();
    }

  async clickReturnHomeButton() {
    await this.returnHomeButton.click();
    }


}

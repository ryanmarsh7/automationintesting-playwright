import { expect, Locator, Page } from '@playwright/test';

// src/pages/ContactPage.ts
export class ContactPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectInput: Locator;
  readonly messageTextarea: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

    // Initialize locators for the contact page elements
  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('input#name');
    this.emailInput = page.locator('input#email');
    this.phoneInput = page.locator('input#phone');
    this.subjectInput = page.locator('input#subject');
    this.messageTextarea = page.locator('textarea#description');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMessage = page.getByRole('heading', { name: 'Thanks for getting in touch' });
  }

  // Navigate to the contact page
  async goto() {
    await this.page.goto('/#contact');
  }

  // Submit the contact form method with parameters for each field
  async submitContactForm(name: string, email: string, phone: string, subject: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.subjectInput.fill(subject);
    await this.messageTextarea.fill(message);
    await this.submitButton.click();
  }


  async assertSuccessMessageVisible() {
    await expect(this.successMessage).toBeVisible();
  }
}

// src/pages/AdminLoginPage.ts
import { expect, Locator, Page } from '@playwright/test';

export class AdminLoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorAlert: Locator;
  readonly loginForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorAlert = page.locator('.alert-danger');
    this.loginForm = page.locator('form');
  }

  async goto() {
    await this.page.goto('/admin');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginFormVisible() {
    await expect(this.loginForm).toBeVisible();
  }

  async assertLoginErrorVisible() {
    await expect(this.errorAlert).toBeVisible();
  }
}

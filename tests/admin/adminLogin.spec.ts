// tests/admin/adminLogin.spec.ts
import { test, expect } from '../../fixtures/pageFixtures';

test.describe('Admin Login Page Tests', () => {
  test.beforeEach(async ({ adminLoginPage }) => {
    await adminLoginPage.goto();
  });

  test('Login form is visible', async ({ adminLoginPage }) => {
    await adminLoginPage.assertLoginFormVisible();
  });

  test('Login with invalid credentials shows error', async ({ adminLoginPage }) => {
    await adminLoginPage.login('wronguser', 'wrongpass');
    await adminLoginPage.assertLoginErrorVisible();
  });

  test('Login with empty fields does not proceed', async ({ adminLoginPage }) => {
    await adminLoginPage.login('', '');
    await adminLoginPage.assertLoginErrorVisible();
  });

  // You may want to skip this one if you don’t want to deal with dashboard after login
  test.skip('Login with valid credentials redirects to admin dashboard', async ({ adminLoginPage }) => {
    await adminLoginPage.login('admin', 'password');
    // Validate something like a dashboard header or logout button
  });
});

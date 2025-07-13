import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { ReservationPage } from '../pages/ReservationPage';


export const test = base.extend<{
  homePage: HomePage;
  contactPage: ContactPage;
  adminLoginPage: AdminLoginPage;
  reservationPage: ReservationPage;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  adminLoginPage: async ({ page }, use) => {
    await use(new AdminLoginPage(page));
  },
  reservationPage: async ({ page }, use) => {
    await use(new ReservationPage(page));
  },
})

export { expect } from '@playwright/test';

;

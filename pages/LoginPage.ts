import { Page, expect } from '@playwright/test';
import { highlightBlue } from '../utils/helper';

export class LoginPage {
  constructor(private page: Page) {}

  async verifyLoginPage() {
    const heading = this.page.getByRole('heading', { name: 'Welcome, Please Sign In!' });
    await highlightBlue(heading);
    await expect(heading).toBeVisible();
  }

  async login(emailValue: string, passwordValue: string) {
    const email = this.page.getByRole('textbox', { name: 'Email' });
    await highlightBlue(email);
    await email.fill(emailValue);

    const password = this.page.getByRole('textbox', { name: 'Password' });
    await highlightBlue(password);
    await password.fill(passwordValue);

    const loginBtn = this.page.getByRole('button', { name: 'Log in' });
    await highlightBlue(loginBtn);
    await loginBtn.click();
  }
}
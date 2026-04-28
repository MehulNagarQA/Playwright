import { Page } from '@playwright/test';
import { highlightBlue } from '../utils/helper';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {



    
    await this.page.goto('https://demowebshop.tricentis.com/');
  }

  async clickLogin() {
    const loginLink = this.page.getByRole('link', { name: 'Log in' });
    await highlightBlue(loginLink);
    await loginLink.click();
  }

  async selectProduct() {
    await this.page.mouse.wheel(0, 500);

    const product = this.page.getByRole('link', { name: '14.1-inch Laptop' }).first();
    await highlightBlue(product);
    await product.click();
  }
}
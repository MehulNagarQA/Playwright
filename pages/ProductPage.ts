import { Page } from '@playwright/test';
import { highlightBlue } from '../utils/helper';

export class ProductPage {
  constructor(private page: Page) {}

  async addToCart() {
    const addToCartBtn = this.page.locator('#add-to-cart-button-31');
    await highlightBlue(addToCartBtn);
    await addToCartBtn.click();
  }
}
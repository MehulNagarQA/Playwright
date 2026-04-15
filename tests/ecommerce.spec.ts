import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

test('Ecommerce complete flow (POM)', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);
  const product = new ProductPage(page);

  // 1. Open site
  await home.navigate();
  await expect(page).toHaveTitle(/Demo Web Shop/);

  await page.screenshot({
    path: `screenshots/1.Home_Page_${Date.now()}.png`
  });

  // 2. Login
  await home.clickLogin();
  await login.verifyLoginPage();

  await page.screenshot({
    path: `screenshots/2.login_${Date.now()}.png`
  });

  await login.login('mehulnagar@yopmail.com', 'Krishna@001');

  await page.screenshot({
    path: `screenshots/3.Login_Success_${Date.now()}.png`
  });

  // 3. Select product
  await home.selectProduct();

  await page.screenshot({
    path: `screenshots/4.Click_on_Product_${Date.now()}.png`
  });

  // 4. Add to cart
  await product.addToCart();

  await page.screenshot({
    path: `screenshots/5.Add_To_Cart_${Date.now()}.png`
  });
});
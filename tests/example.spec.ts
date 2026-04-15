import { test, expect, Locator } from '@playwright/test';
 
async function highlightBlue(locator: Locator) {
 await locator.evaluate((el: HTMLElement) => {
 el.style.border = '5px solid Blue';
 el.style.backgroundColor = '#e6f0ff';
 });
 
 }
 
test('Ecommerce complete flow', async ({ page }) => {
 
 // 1. Open site
 await page.goto('https://demowebshop.tricentis.com/');
 await expect(page).toHaveTitle(/Demo Web Shop/);
 
 await page.waitForTimeout(2000);
 await page.screenshot({
 path: `screenshots/1.Home_Page_${Date.now()}.png`
 });
 
 
 // 2. Click Login
 const loginLink = page.getByRole('link', { name: 'Log in' });
 await highlightBlue(loginLink);
 await page.waitForTimeout(500);
 await loginLink.click();
 
 const heading = page.getByRole('heading', { name: 'Welcome, Please Sign In!' });
 await highlightBlue(heading);
 await expect(heading).toBeVisible();
 
 await page.waitForTimeout(2000);
 await page.screenshot({
 path: `screenshots/2.login_${Date.now()}.png`
 });
 
 // 3. Login
 const email = page.getByRole('textbox', { name: 'Email' });
 await highlightBlue(email);
 await page.waitForTimeout(2000);
 await email.fill('mehulnagar@yopmail.com');
 
 const password = page.getByRole('textbox', { name: 'Password' });
 await highlightBlue(password);
 await password.fill('Krishna@001');
 
 const loginBtn = page.getByRole('button', { name: 'Log in' });
 await highlightBlue(loginBtn);
 await page.waitForTimeout(1000);
 await loginBtn.click();
 await page.screenshot({
 path: `screenshots/3.Login_Success${Date.now()}.png`
 });
 
 
 // 4. Find Product
 
await page.mouse.wheel(0, 500);
const product = page.getByRole('link', { name: '14.1-inch Laptop' }).first();
 await highlightBlue(product);
await page.waitForTimeout(2000);
await product.click();
await page.waitForTimeout(2000);
 
 
 await page.screenshot({
 path: `screenshots/4.Click_on_Product_${Date.now()}.png`
 }); 
 
 
// 5. Add to cart
 
await page.waitForTimeout(2000);
const addToCartBtn = page.locator('#add-to-cart-button-31');
 
await highlightBlue(addToCartBtn);
await addToCartBtn.click();
 
await page.waitForTimeout(2000);
// Optional: wait for success notification
//await page.waitForSelector('.bar-notification.success');
 
 
 await page.screenshot({
 path: `screenshots/5.Add_To_Cart${Date.now()}.png`
 });
 
 
 
 
});
 
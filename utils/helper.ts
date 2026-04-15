import { Locator } from '@playwright/test';

export async function highlightBlue(locator: Locator) {
  await locator.evaluate((el: HTMLElement) => {
    el.style.border = '5px solid Blue';
    el.style.backgroundColor = '#e6f0ff';
  });
}
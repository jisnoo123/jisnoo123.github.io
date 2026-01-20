const page = arguments[0];
await page.evaluate(() => window.scrollTo(0, document.querySelector('#news').offsetTop - 100));
await page.waitForTimeout(500);

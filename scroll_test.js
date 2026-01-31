const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8000', { waitUntil: 'networkidle2' });
  
  // Scroll down to see news section
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);
  
  await page.screenshot({ path: '/tmp/scrolled_view.png', fullPage: false });
  await browser.close();
})();

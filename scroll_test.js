const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:8000');
  
  // Take screenshot of Projects to Education transition
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.screenshot({ path: '/tmp/spacing_projects_education.png', fullPage: false });
  
  // Take screenshot of Education to Honors transition
  await page.locator('#education').scrollIntoViewIfNeeded();
  await page.screenshot({ path: '/tmp/spacing_education_honors.png', fullPage: false });
  
  // Take screenshot of Honors to Specializations transition
  await page.locator('#honors').scrollIntoViewIfNeeded();
  await page.screenshot({ path: '/tmp/spacing_honors_specializations.png', fullPage: false });
  
  await browser.close();
})();

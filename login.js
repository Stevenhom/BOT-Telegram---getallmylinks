const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    args: ['--start-maximized'],
    userDataDir: './my-user-data'
  });
  
  const pages = await browser.pages();
  const page = pages[0];

  await page.goto('https://getallmylinks.com/login', { waitUntil: 'networkidle2' });

  await page.waitForSelector('input[name="email"]');
  await page.waitForSelector('input[name="password"]');

  await page.type('input[name="email"]', 'TON_EMAIL_ICI');
  await page.type('input[name="password"]', 'TON_MDP_ICI');

  await page.click('button[type="submit"]');

})();

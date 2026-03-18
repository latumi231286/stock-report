const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 1700,
    deviceScaleFactor: 4
  });

  const path = require('path');

  const filePath = 'file://' + path.resolve('/home/giangtran/work/report/report-170326_v7.html');

  await page.goto(filePath, {
    waitUntil: 'networkidle0'
  });

  await page.evaluate(() => {
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  });

  const element = await page.$('.card'); // hoặc '.wrap'

  if (!element) {
    throw new Error('Không tìm thấy .card');
  }

  await element.screenshot({
    path: 'report.png'
  });

  await browser.close();
})();

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 1600,
    deviceScaleFactor: 2   // tăng độ nét
  });

  await page.goto('file:////home/giangtran/work/report/report-130326_v8.html');

  await page.screenshot({
    path: 'report.png',
    fullPage: true
  });

  await browser.close();
})();

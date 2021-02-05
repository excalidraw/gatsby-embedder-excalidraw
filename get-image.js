const puppeteer = require('puppeteer');

module.exports = async url => {
  // disable sandbox in production
  const browser = await puppeteer.launch({
    slowMo: 100,
    // headless: false,
    args: process.env.NODE_ENV === 'production' ? ['--no-sandbox'] : []
  });

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();

  // accept the "replace drawing" dialog if it shows up
  page.on('dialog', dialog => dialog.accept());

  await page.goto(url);
  await page.click('[aria-label=Export]');

  const result = await page.mainFrame().evaluate(
    () =>
      new Promise((resolve, reject) => {
        try {
          delete window.chooseFileSystemEntries;
          const reader = new FileReader();
          reader.addEventListener('loadend', () => resolve(reader.result));
          reader.addEventListener('error', () => reject(reader.error));
          URL.createObjectURL = blob => reader.readAsText(blob);

          const button = document.querySelector('[aria-label="Export to SVG"]');
          button.click();
        } catch (error) {
          reject(error);
        }
      })
  );

  await browser.close();
  return result;
};

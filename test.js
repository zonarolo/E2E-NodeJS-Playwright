const playwright = require("playwright");

(async () => {
  //open browser
  const browser = await playwright["chromium"].launch({
    headless: false,
    slowMo: 50,
  });

  //context

  const context = await browser.newContext();

  //page

  const page = await context.newPage();

  //navigate to the page

  await page.goto("https://web.gencat.cat/ca/inici");
})();

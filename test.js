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

  // Wait for the page load

  let waitPeriod = 1;
  await page.waitForResponse((response) => {
    console.log("Starting to wait ...." + waitPeriod);
    waitPeriod++;
    return response.request().resourceType() === "xhr";
  });

  await page.screenshot({ path: `./screenshots/ch-${Date.now}.png` });

  await browser.close();
})();

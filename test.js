const playwright = require("playwright");

// My variables

let myBrowser = "chromium";
let myHeadless = false;
let mySlowmMo = 50;
let myPage = "https://web.gencat.cat/ca/inici";
let myImput = "[id=cercadorOcultGoogle]";
let mySearch = "agenda cultural";

(async () => {
  //open browser
  const browser = await playwright[myBrowser].launch({
    headless: myHeadless,
    slowMo: mySlowmMo,
  });

  // Context

  const context = await browser.newContext();

  // Page

  const page = await context.newPage();

  // Navigate to the page

  await page.goto(myPage);

  // Wait for the page load

  let waitPeriod = 1;
  await page.waitForResponse((response) => {
    console.log("Starting to wait .... " + waitPeriod + " Seconds");
    waitPeriod++;
    return response.request().resourceType() === "xhr";
  });

  // Search in the page
  await page.type(myImput, mySearch);
  await page.click(`//input[@aria-label="Cercar"]`);

  await sleep(1000);
  // await page.keyboard.press("Enter", { delay: 1000 });   // ---> This is my solution.
  
  // Screenshot
  let d = new Date().getUTCMilliseconds();
  await page.screenshot({ path: `./screenshots/ch-${d}.png` });
  
  // Print differents names for screenshots

  console.log(
    `-------------------
    You can see your screenshot searching by the name ** ch-${d}.png ** in the "screenshots folder"
    ---------------`
  );
  // Close browser

  await browser.close();
})();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms || DEF_DELAY));
}

# E2E-NodeJS-Playwright

This is a simple E2E test using the tool Playwright, if you want to executed you need to clone this repo and type:

```
node ./test.js
```

## TECHNICAL EXERCISE
### Automate a process that performs a search on the website of the Generalitat de Catalunya (Government of Catalonia)

Steps to automate

- Go to the Generalitat de Catalunya website
https://web.gencat.cat/ca/inici
- Search for "agenda cultural".
- Click on the search button

How to perform the task?

1. Create a project in github shared with the user jgalobart and use git as version control.
2. Use the Playwright library, which runs on top of NodeJS.
https://playwright.dev/docs/intro
3. Emulate in Chromium, without the headless option and with the slow motion option set to 50.
```
chromium.launch({ headless: false, slowMo: 50 });
```
4. Automate the steps described above

### You can use your own variables by simply changing them in the file header.  
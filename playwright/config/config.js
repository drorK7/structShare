// config.js
const { chromium } = require('playwright');
const baseUrl = require('./baseUrl');

async function setup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Move the common configuration to the setup function
  await page.goto(baseUrl.demoBlazeBaseUrl);

  return { browser, page };
}

async function teardown(browser) {
  await browser.close();
}

module.exports = { setup, teardown };

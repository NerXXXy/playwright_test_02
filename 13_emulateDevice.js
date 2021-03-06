const {chromium,devices} = require('playwright');

(async () => {

    const browser = await chromium.launch({headless:false})
    const iPhone11 = devices["iPhone 11 Pro"];
    const context = await browser.newContext({...iPhone11})
    const page = await context.newPage()

    await page.goto('https://www.google.com')

    await context.close()
    await browser.close()

}) ()
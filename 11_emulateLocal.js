const {chromium} = require('playwright');

(async () => {

    const browser = await chromium.launch({headless:false})
    // const context = await browser.newContext()
    const context = await browser.newContext({
        locale: 'de-DE',
        timezoneId: 'Europe/Berlin',
    })
    const page = await context.newPage()

    await page.goto('https://www.thetimezoneconverter.com/')

}) ()
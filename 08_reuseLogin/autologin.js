const {chromium} = require('playwright');

(async () => {

    const browser = await chromium.launch({headless : false})
    const context = await browser.newContext({storageState: '08_reuseLogin/state.json'})
    const page = await context.newPage()

    await page.goto('https://react-redux.realworld.io/#/login')


}) ()
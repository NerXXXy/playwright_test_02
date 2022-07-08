const {chromium} = require('playwright');
const {expect} = require('expect');

(async () => {

    const browser = await chromium.launch({headless:false, slowMo:50})
    const context = await browser.newContext({acceptDownloads : true})
    const page = await context.newPage()

    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'nerxtest@gmail.com')
    await page.type('input[type = "password"]' , 'nerxtest')
    await page.click('form >> "Sign in"')
    const html = await page.innerHTML('.feed-toggle')
    expect(html).toMatch('Your Feed')

    await context.storageState({path : '08_reuseLogin/state.json'})

    await browser.close()



})()
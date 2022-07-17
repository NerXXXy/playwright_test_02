const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    // const context = await browser.newContext({
    //     viewport: {width: 1600 , height: 1200}
    // })
    const page = await context.newPage()
    page.setViewportSize({width: 1600 , height: 1200})
    page.goto('https://todomvc.com/examples/react/#/')




}) ()
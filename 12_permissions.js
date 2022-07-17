const {chromium} = require('playwright');

(async () => {

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext({
        geolocation:{longitude:24.02615547180176, latitude:49.843988271866735},
        permissions:['geolocation'],
    })

    // await context.grantPermissions(['geolocation'])
    // await context.clearPermissions()

    // await context.setGeolocation({longitude:24.02615547180176, latitude:49.843988271866735})

    const page = await context.newPage()
    await page.goto('https://www.maps.ie/coordinates.html')
    await page.click('#find-loc')


    await context.close()
    await browser.close()

}) ()
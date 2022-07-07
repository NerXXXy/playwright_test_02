const {chromium} = require('playwright');

(async () => {

    const browser = await chromium.launch({headless:false , slowMO:50})
    const context = await browser.newContext({acceptDownloads:true})
    const page = await context.newPage()

    await page.goto('https://github.com/NerXXXy/downloadTest')

    const but = await page.$("summary[class ='btn-primary btn']")
    await but.click()

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('.octicon-file-zip')
    ])

    const path = await download.path()
    console.log(path)

    download.saveAs('./download.zip')



}) ()
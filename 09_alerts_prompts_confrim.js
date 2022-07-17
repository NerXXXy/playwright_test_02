const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({
        headless:false,
        slowMo:500
    })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://kitchen.applitools.com/ingredients/alert', {timeout:45000})


    page.on('dialog', async dialog => {
        console.log(dialog.message())
        console.log(dialog.type())
        await dialog.accept()
    });
    await page.click('#alert-button');

    page.on('dialog' , dialog => dialog.dismiss())
    await page.click('#confirm-button')

    page.on('dialog' , dialog => dialog.accept('Vova'))
    await page.click('#prompt-button')



    await context.close()
    await browser.close()

}) ()

// api tools


const {expect} = require('chai');
const {Given, When, Then} = require('cucumber');
const puppeteer = require('puppeteer');
const pathScreenShots = './screenshots/login';

global.testContext = global.testContext || {};

Given('I write the url of portal {string} in  the browser',
    {timeout: 20 * 1000}, async (portalUrl) => {
        const width = 1280;
        const height = 1200;
        global.testContext.screenshotPath = `${pathScreenShots}-${new Date().getTime()}`;
        global.testContext.browser = await puppeteer.launch({
            headless: false,
            launch: {},
            browserContext: 'default',
            exitOnPageError: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-background-timer-throttling',
                '--disable-backgrounding-occluded-windows',
                '--disable-renderer-backgrounding',
                `--window-size=${width},${height}`
            ]
        });
        global.testContext.page = await global.global.testContext.browser.newPage();
        await global.testContext.page.goto(portalUrl);
        await global.testContext.page.setViewport({width: width, height: height});
        await global.testContext.page.waitForSelector("body");
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step0.png`});
    });

When('I write my credentials, login : {string}  and password: {string} and click in login button',
    {timeout: 20 * 1000}, async (userLogin, userPassword) => {
        await expect(await global.testContext.page.waitForSelector(".login_singup_form"));
        await global.testContext.page.type('.login_singup_form .input_email', userLogin);
        await global.testContext.page.type('.login_singup_form .form_field_control', userPassword);
        await global.testContext.page.click('.login_singup_form .submit_btn');
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step1.png`});
    });

Then('I should view the redirection page with content: {string}', {timeout: 20 * 1000}, async (redirectPortalContent) => {
    await expect(await global.testContext.page.waitForSelector("body"));
    const content = await global.testContext.page.content();
    expect(content).to.have.string(redirectPortalContent);
    await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step2.png`});
    await global.testContext.browser.close();
});
const {expect} = require('chai');
const {Given, When, Then} = require('cucumber');
const puppeteer = require('puppeteer');
const pathScreenShots = './screenshots/register';

global.testContext = global.testContext || {};

Given('I go to the url of register {string}',
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

When('I write my register data, userName: {string}, email: {string} and  password: {string}',
    {timeout: 20 * 1000}, async (userName, email, password) => {
        await expect(await global.testContext.page.waitForSelector(".login_singup_form"));
        await global.testContext.page.type('#sign_up_form .input_name', userName);
        await global.testContext.page.type('#sign_up_form .input_email', email);
        await global.testContext.page.type('#sign_up_form .form_field_control', password);
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step1.png`});
    });

When('I accept terms of service',
    {timeout: 20 * 1000}, async () => {
        await expect(await global.testContext.page.waitForSelector("#accept_terms"));
        await global.testContext.page.click('#accept_terms');
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step2.png`});
    });

When('I click in submit button',
    {timeout: 20 * 1000}, async () => {
        await expect(await global.testContext.page.waitForSelector(".submit_btn"));
        await global.testContext.page.click('.submit_btn');
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step3.png`});
    });

Then('I should view the result page with content: {string}', {timeout: 20 * 1000}, async (redirectPortalContent) => {
    await expect(await global.testContext.page.waitForSelector("body"));
    const content = await global.testContext.page.content();
    expect(content).to.have.string(redirectPortalContent);
    await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step4.png`});
    await global.testContext.browser.close();
});
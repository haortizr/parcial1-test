const {expect} = require('chai');
const {Given, When, Then} = require('cucumber');
const puppeteer = require('puppeteer');
const pathScreenShots = './screenshots/filter-task';
const select = require('puppeteer-select');

global.testContext = global.testContext || {};

Given('I am in dashboard',
    {timeout: 20 * 1000}, async () => {
        await global.testContext.page.waitFor(() => !document.querySelector(".loading-screen--logo"));
        await global.testContext.page.waitFor(() => !document.querySelector(".loading_screen"));
        global.testContext.screenshotPath = `${pathScreenShots}-${new Date().getTime()}`;
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step0.png`});
    });

When('I click in text {string}',
    {timeout: 30 * 1000}, async (textToClick) => {
        const span = await select(global.testContext.page).getElement(`span:contains(${textToClick})`);
        const h5 = await select(global.testContext.page).getElement(`h5:contains(${textToClick})`);
        const link = await select(global.testContext.page).getElement(`a:contains(${textToClick})`);
        if (span) {
            await span.click();
        } else if (h5) {
            await h5.click();
        } else if (link) {
            await link.click();
        }
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step1.png`});
    });


Then('I should view {string} as dashboard title',
    {timeout: 20 * 1000}, async (dashboardTitle) => {
        expect(await select(global.testContext.page).getElement(`h2:contains(${dashboardTitle})`));
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step3.png`});
        // await global.testContext.browser.close();
    });

Then('I close the browser',
    {timeout: 20 * 1000}, async () => {
        await global.testContext.page.waitForSelector("body");
        await global.testContext.browser.close();
    });

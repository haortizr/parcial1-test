const {expect} = require('chai');
const {Given, When, Then} = require('cucumber');
const puppeteer = require('puppeteer');
const pathScreenShots = './screenshots/add-task';

global.testContext = global.testContext || {};

Given('I am authenticated on the site {string} with my credentials,  login : {string}  and password: {string}',
    {timeout: 20 * 1000}, async (portalUrl, userLogin, userPassword) => {
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
        await expect(await global.testContext.page.waitForSelector(".login_singup_form"));
        await global.testContext.page.type('.login_singup_form .input_email', userLogin);
        await global.testContext.page.type('.login_singup_form .form_field_control', userPassword);
        await global.testContext.page.click('.login_singup_form .submit_btn');
        await global.testContext.page.waitForSelector("body");
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step0.png`});
    });

When('I click in add task button',
    {timeout: 30 * 1000}, async () => {
        await expect(await global.testContext.page.waitForSelector("#quick_add_task_holder"));
        await global.testContext.page.waitFor(() => !document.querySelector(".loading-screen--logo"));
        await global.testContext.page.waitFor(() => !document.querySelector(".loading_screen"));
        await global.testContext.page.click('#quick_add_task_holder');
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step1.png`});
    });


When('I write a description of a new task: {string}',
    {timeout: 20 * 1000}, async (taskDescription) => {
        await global.testContext.page.waitFor(() => !document.querySelector(".loading-screen--logo"));
        await global.testContext.page.waitFor(() => !document.querySelector(".loading_screen"));
        await expect(await global.testContext.page.waitForSelector(".richtextinput.item_editor_input"));
        await global.testContext.page.click('.richtextinput.item_editor_input');
        await global.testContext.page.type('.richtextinput.item_editor_input', taskDescription);
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step2.png`});
    });


When('I cancel task creation',
    {timeout: 20 * 1000}, async () => {
        await expect(await global.testContext.page.waitForSelector(".reactist_modal_box__header_button.button"));
        await global.testContext.page.click('.reactist_modal_box__header_button.button');
        await expect(await global.testContext.page.waitForSelector(".alert_holder .ist_button_red"));
        await global.testContext.page.click('.alert_holder .ist_button_red');
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step3.png`});
    });

When('I submit task creation',
    {timeout: 20 * 1000}, async () => {
        await expect(await global.testContext.page.waitForSelector(".item_editor_submit"));
        await global.testContext.page.click('.item_editor_submit.ist_button.ist_button_red');
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step4.png`});
    });


Then('I should view {string} task in list',
    {timeout: 20 * 1000}, async (taskDescription) => {
        await expect(await global.testContext.page.waitForSelector(".section_day .items"));
        const taskItems = await global.testContext.page.evaluate(() => document.querySelector('.section_day .items').textContent);
        expect(taskItems).to.have.string(taskDescription);
        await global.testContext.page.screenshot({path: `${global.testContext.screenshotPath}-step5.png`});
        await global.testContext.browser.close();
    });



import { test, expect, type Page } from '@playwright/test';


test('Selectors DEMO', async ({page}) => {

    await page.goto('https://www.saucedemo.com/');
    await page.pause()

    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Medison')
    // await page.locator('[id ="user-name"]').fill('user2name')
    //Using CSS selector
    // #login-button
    await page.locator('#login-button').click();

    // Using XPath
    await page.locator('xpath=//input[@name="password"]').fill('Faraday');
    await page.locator('//input[@name="password"]').fill('Ramon')

});
const {
    test,
    expect
} = require('@playwright/test')
const {
    LocatorsContent
} = require('../pageObjects/LocatorsContent');
let mainMenu
let incomeTaxMenu

test('New playwright test JEST', async ({
    page
}) => {
    // Using page Objects Model 
    const locatorsContent = new LocatorsContent(page);
    // Goes to the page 
    await page.goto('/government/organisations/hm-revenue-customs');
    //This handles cookie pop ups
    await page.click('text=Accept');
    await page.click('text=Hide');
    //Using a page objects model reusable function below
    await locatorsContent.clickAllTherequiredButtons();

});






// await (mainMenu).click();
// await expect(incomeTaxMenu.nth(0)).toHaveText('Income Tax in Wales');
// await (incomeTaxMenu.nth(0)).click();
// await expect (page.locator('text=Income Tax in Wales')).toBeVisible();
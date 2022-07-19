const {
  Given,
  When,
  Then
} = require('@cucumber/cucumber');
// import expect for assertion
const {
  expect
} = require("@playwright/test");
const url = 'https://www.gov.uk/government/organisations/hm-revenue-customs'


Given('I navigate to HMRC website', async function () {
  await page.goto(url)
  //This handles cookie pop ups
  await page.click('text=Accept');
  await page.click('text=Hide');

});

When('I click Income Tax and Income Tax in Wales', async function () {
  await page.locator('text=Income Tax >> nth=0').click();
  await page.locator('text=Income Tax in Wales').click();
});


Then('The tax band for Wales should be displayed', async function () {
  await expect(page.locator('text=Income Tax in Wales')).toBeVisible();
  await expect(page.locator('text=Rates and bands for 2022 to 2023')).toBeVisible();

});
const {
    expect
} = require("@playwright/test");

class LocatorsContent {

    constructor(page)

    {
        this.page = page;
        this.mainMenu = page.locator('text=Income Tax >> nth=0');
        this.incomeTaxButton = page.locator('text=Income Tax >> nth=0');
        this.incomeTaxMenu = page.locator('.browse-container div:nth-child(10) li');
        this.incomeTaxInWalesText = (page.locator('text=Income Tax in Wales'));

    }

    async clickAllTherequiredButtons() {
        await this.mainMenu.click();
        await expect(this.incomeTaxMenu.nth(0)).toHaveText('Income Tax in Wales');
        await (this.incomeTaxMenu.nth(0)).click();
        await expect(this.incomeTaxInWalesText).toBeVisible();

    };
}
module.exports = {
    LocatorsContent
};
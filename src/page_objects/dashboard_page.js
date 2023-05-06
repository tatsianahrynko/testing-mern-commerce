import DrawerPage from './drawer_page.js';
//const DrawerPage = require('./drawer_page');

class DashboardPage {
    constructor(page) {
        this.page = page;
    }
    async isOpen() {
        const element = await this.page.locator('//*[@class="role member "]');
        return element.textContent();       
    }
    async openCart() {
        await this.page.locator('.bag-icon').nth(1).click();
        return new DrawerPage(this.page);
    }
}
export default DashboardPage;
//module.exports =  DashboardPage;
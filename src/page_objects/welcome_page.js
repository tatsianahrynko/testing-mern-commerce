const LoginPage = require('./login_page'); //I can use this class on Wecome page
const ProductPage = require('./product_page');

class WelcomePage {
    constructor(page) {
        this.page = page;
    }
    
    async open() {
        await this.page.goto('https://mern-ecommerce.sdet.school/');
    }   
    async openLoginPage() {
        console.log('Welcome');
        await this.page.getByText('Welcome!').click();
        await this.page.getByText('Login').click();
        return new LoginPage(this.page);
    }

    /**
     * Search for product
     * 
     * @param {string} prodyctName - product to search
     * @param {number} index - aproduct index
     */

    async search(productName, index) {
        await this.page.locator('//*[@autocomplete="off"]').type(productName); //XPath
        await this.page.locator('ul[role="listbox"]').waitFor();
        const foundProducts = await this.page.locator('//*[@role="option"]').all();
        //console.log(foundProducts.length);
        
        if(foundProducts.length - 1 < index) {
            throw new Error('search index out of bounds');
        }
        await foundProducts[index].click();
        return new ProductPage(this.page);
    }
}
module.exports =  WelcomePage; 
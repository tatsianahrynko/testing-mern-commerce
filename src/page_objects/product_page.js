import DrawerPage from './drawer_page.js';
//const DrawerPage = require('./drawer_page');

class ProductPage {
    constructor(page) {
        this.page = page;
    }
    async addProductToCart() {
        this.page.getByText('Add To Bag').click();
        return new DrawerPage(this.page);
    }
}

export default ProductPage; 
//module.exports =  ProductPage;
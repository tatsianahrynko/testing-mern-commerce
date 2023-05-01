const LoginPage = require('./login_page'); //I can use this class on Wecome page

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
}
module.exports =  WelcomePage ;
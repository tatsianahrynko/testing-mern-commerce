import { expect, use } from 'chai';
import browsers from 'playwright';
import { getUserOrders } from '../src/client/orders.js';
import { login } from '../src/client/auth.js';
import { User } from '../src/users/user.js';
import WelcomePage from '../src/page_objects/welcome_page.js';

const sleep = async (ms) => { return new Promise((resolve) => { return setTimeout(resolve, ms); }); };

describe.only('Create user, and adding products to the cart and create order', () => {
    let browser;
    let context;
    let page;
    beforeEach(async() => {
        const browserType = browsers['webkit'];
        browser = await browserType.launch({
            headless: false
        });
        console.log(browser.version());
        context = await browser.newContext({
            viewport:{
                width: 1200,
                height: 800
            }
        });
        await context.setDefaultTimeout(6000);
        page = await context.newPage();
    });  
    afterEach(async() => {
        await sleep(3000);
        await page.close();
        await browser.close();
    });
    it('should create an order', async () => {
        //console.log('WWWWWWW');
        const user = await User.createUser();
        await user.addAddress();
    });
});


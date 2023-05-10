import { expect } from 'chai';
import browsers from 'playwright';
import { getUserOrders } from '../src/client/orders.js';
import { login } from '../src/client/auth.js';

import WelcomePage from '../src/page_objects/welcome_page.js';

describe('Create user, and adding products to the cart and create order', () => {
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
        await sleep(7000);
        await page.close();
        await browser.close();
    });
    it('should create an order', async () => {
        console.log('WWWWWWW');
    });
});


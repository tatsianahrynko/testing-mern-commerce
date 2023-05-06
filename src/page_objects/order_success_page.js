class OrderSuccessPage {
    constructor(page) {
        this.page = page;
    }
    async getOrderId() {
        const text = await this.page.locator('.order-label').textContent();
        //console.log(text);
        return text.substring(1); //returns order without 1st hashtag
    }
}

export default OrderSuccessPage;
//module.exports = OrderSuccessPage;
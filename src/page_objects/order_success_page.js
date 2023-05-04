class OrderSuccessPage {
    constructor(page) {
        this.page = page;
    }
    async getOrderId() {
        const text = this.page.locator('.order-label').textContent();
        console.log(text);
    }
}

module.exports = OrderSuccessPage;
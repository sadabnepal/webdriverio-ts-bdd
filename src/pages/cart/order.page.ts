class OrderPage {

    get ConfirmOrder() { return $("//span[text()='I confirm my order']") }
    get orderConfirmed() { return $("//h1") }

    async clickOnConfirmOrder() {
        await this.ConfirmOrder.click()
    }
}
export default new OrderPage()
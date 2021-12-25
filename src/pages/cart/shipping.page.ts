class ShippingPage {

    get shippingPage() { return $("//h1") }
    get termsAndConditions() { return $("#cgv") }
    get checkOut() { return $("//button[@name='processCarrier']") }

    async selectTermAndProceedToCheckout() {
        await this.termsAndConditions.click()
        await this.checkOut.click()
    }
}
export default new ShippingPage()
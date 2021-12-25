class PaymentPage {

    get paymentHeader() { return $("//h1") }
    get Payment() { return $(".bankwire") }

    async selectPaymentType() {
        await this.Payment.click();
    }
}
export default new PaymentPage()
class AddressPage {

    get addressHeader() { return $(".page-heading") }
    get deliveryAddress() { return ("//label[@for='id_address_delivery']") }
    get checkOut() { return $("//button[@name='processAddress']") }

    async proceedToCheckout() {
        await this.checkOut.click()
    }

}
export default new AddressPage()
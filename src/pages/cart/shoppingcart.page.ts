class ShoppingCartPage {

    get shoppingCart() { return $("#cart_title") }
    get checkOut() { return $(".button.btn.btn-default.standard-checkout.button-medium") }

    async proceedToCheckout() {
        await this.checkOut.click()
    }
}
export default new ShoppingCartPage()
class WomenPage {

    get productContainer() { return $("//img[@title='Blouse']/ancestor::div[@class='product-container']") }
    get addToCart() { return $("//a[@title='Add to cart' and @data-id-product='2']") }
    get productAdded() { return $("//i[@class='icon-ok']/..") }
    get checkOut() { return $('//a[@title="Proceed to checkout"]') }

    async addProductToCartFromWomenMenu() {
        await this.productContainer.scrollIntoView()
        await this.productContainer.moveTo()
        await this.addToCart.waitForClickable()
        await this.addToCart.click()
    }

    async proceedToCheckOut() {
        await this.checkOut.waitForClickable()
        await this.checkOut.click()
    }

}
export default new WomenPage()
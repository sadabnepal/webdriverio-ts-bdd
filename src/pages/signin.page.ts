import BasePage from "./BasePage"

class SigninPage extends BasePage {

    get signInBtn() { return $("//a[@href='/login']") }
    get AuthHeader() { return $("//h2") }

    async openApplication() {
        await super.open("https://the-internet.herokuapp.com/")
    }

    async clickOnSingIn() {
        await this.clickElement(this.signInBtn)
    }
}
export default new SigninPage()
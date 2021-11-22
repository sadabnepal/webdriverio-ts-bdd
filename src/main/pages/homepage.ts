import BasePage from '../../main/pages/BasePage'

class HomePage extends BasePage {

    get homepage_logo() { return $('#header_logo') }
    get sign_in() { return $('.login') }

    async open() {
        await super.open("http://automationpractice.com")
    }

    async clickOnSignin() {
        await this.clickElement(this.sign_in);
    }
}
export default new HomePage();
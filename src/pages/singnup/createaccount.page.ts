import BasePage from "../BasePage"

class CreateAccountPage extends BasePage {

    get email() { return $("//input[@class='is_required validate account_input form-control']") }
    get createAcc() { return $("//i[@class='icon-user left']") }
    get pageHeader() { return $("//h1[@class='page-heading']") }

    async proceedToCreateAccount(emailAddress: string) {
        await this.setData(this.email, emailAddress)
        await this.clickElement(this.createAcc)
    }

}
export default new CreateAccountPage()
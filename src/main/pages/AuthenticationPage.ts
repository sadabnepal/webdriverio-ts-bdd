import BasePage from '../../main/pages/BasePage'

class Authentication extends BasePage {

    get navigation_page() { return $('.navigation_page') }
    get createAccount_panel() { return $('#create-account_form') }
    get alreadyRegister_panel() { return $('#login_form') }

    get createEmail_input() { return $('#email_create') }
    get email_input_status() { return $('#create-account_form>.form_content>div:nth-child(3)') }
    get createAccount_btn() { return $('#SubmitCreate') }

    async setEmail(email: string) {
        await this.setData(this.createEmail_input, email)
        browser.keys('Tab');
    }

    async clickOnCreateAccount() {
        await this.clickElement(this.createAccount_btn)
    }
}
export default new Authentication()
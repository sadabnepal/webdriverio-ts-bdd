import basepage from 'src/pages/BasePage'

class Authentication extends basepage {
    get navigation_page() { return $('.navigation_page') }
    get createAccount_panel() { return $('#create-account_form') }
    get alreadyRegister_panel() { return $('#login_form') }

    get createEmail_input() { return $('#email_create') }
    get email_input_status() { return $('#create-account_form>.form_content>div:nth-child(3)') }
    get createAccount_btn() { return $('#SubmitCreate') }

    authenticationPageNavigationText(): string {
        let pageText = this.doGetText(this.navigation_page)
        return pageText.trim();
    }

    createAccount_panel_isDisplayed(): boolean {
        return this.doIsDisplayed(this.createAccount_panel)
    }

    alreadyRegister_panel_isDisplayed(): boolean {
        return this.doIsDisplayed(this.alreadyRegister_panel)
    }

    setEmail(email:string) {
        this.doSetValue(this.createEmail_input, email)
        browser.keys('Tab');
        return this.email_input_status.getAttribute('class');
    }

    clickOnCreateAccount() {
        this.doClick(this.createAccount_btn)
    }
}
export default new Authentication()
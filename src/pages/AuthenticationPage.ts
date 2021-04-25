import { WaitEnum } from 'src/enums/WaitEnums'
import basepage from 'src/pages/BasePage'

class Authentication extends basepage {

    private get navigation_page() { return $('.navigation_page') }
    private get createAccount_panel() { return $('#create-account_form') }
    private get alreadyRegister_panel() { return $('#login_form') }

    private get createEmail_input() { return $('#email_create') }
    private get email_input_status() { return $('#create-account_form>.form_content>div:nth-child(3)') }
    private get createAccount_btn() { return $('#SubmitCreate') }

    authenticationPageNavigationText(): string {
        return this.doGetText(this.navigation_page, WaitEnum.DISPLAYED)
    }

    createAccount_panel_isDisplayed(): boolean {
        return this.doIsDisplayed(this.createAccount_panel, WaitEnum.DISPLAYED)
    }

    alreadyRegister_panel_isDisplayed(): boolean {
        return this.doIsDisplayed(this.alreadyRegister_panel, WaitEnum.DISPLAYED)
    }

    setEmail(email:string):string {
        this.doSetValue(this.createEmail_input, email, WaitEnum.DISPLAYED)
        browser.keys('Tab');
        return this.email_input_status.getAttribute('class');
    }

    clickOnCreateAccount():void {
        this.doClick(this.createAccount_btn, WaitEnum.CLICKABLE)
    }
}
export default new Authentication()
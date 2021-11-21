import { WaitEnum } from '../../main/enums/WaitEnums'
import BasePage from '../../main/pages/BasePage'

class HomePage extends BasePage {

    private get homepage_logo() { return $('#header_logo') }
    private get sign_in() { return $('.login') }

    open() {
        return super.open("http://automationpractice.com")
    }

    getHomepageLogo() {
        return this.getElement(this.homepage_logo, WaitEnum.DISPLAYED)
    }

    clickOnSignin() {
        this.clickElement(this.sign_in, WaitEnum.CLICKABLE);
    }
}
export default new HomePage();
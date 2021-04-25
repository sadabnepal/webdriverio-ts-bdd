import { WaitEnum } from 'src/enums/WaitEnums'
import basepage from 'src/pages/BasePage'

class homepage extends basepage {

    private get homepage_logo() { return $('#header_logo') }
    private get sign_in() { return $('.login') }

    open() {
        return super.open()
    }

    doHomepageLogoDisplayed():boolean {
        return this.doIsDisplayed(this.homepage_logo, WaitEnum.DISPLAYED)
    }

    clickOnSignin():void {
        this.doClick(this.sign_in, WaitEnum.CLICKABLE);
    }
}
export default new homepage();
import basepage from 'src/pages/BasePage'
class homepage extends basepage {
    get homepage_logo() { return $('#header_logo') }
    get sign_in() { return $('.login') }

    open() {
        return super.open()
    }

    doHomepageLogoDisplayed():boolean {
        return this.doIsDisplayed(this.homepage_logo)
    }

    clickOnSignin() {
        this.doClick(this.sign_in);
    }
}
export default new homepage();
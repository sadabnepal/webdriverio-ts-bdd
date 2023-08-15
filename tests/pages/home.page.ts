import BasePage from "./base.page";

class HomePage extends BasePage {

    get homePageLogo() { return $("[title=ParaBank]") }
    private get leftMenu() { return $(".leftmenu") }
    private get usernameInput() { return $("[name=username]") }
    private get passwordInput() { return $("[name=password]") }
    private get logInButton() { return $("[value='Log In']") }

    async openApplication() {
        await super.open("https://parabank.parasoft.com/parabank/index.htm")
    }

    async clickOnLink(linkText: string) {
        const element = $(`//a[text()='${linkText}']`)
        await this.clickElement(element);
    }

    async getAllLeftMenu() {
        return await this.leftMenu.$$("li").map(async list => await list.getText());
    }

    async login(username: string, password: string) {
        await this.setData(this.usernameInput, username);
        await this.setData(this.passwordInput, password);
        await this.clickElement(this.logInButton)
    }

}
export default new HomePage()
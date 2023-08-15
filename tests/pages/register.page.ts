import { CreateAccountType } from "../types/custom";
import BasePage from "./base.page";


class RegisterPage extends BasePage {

    get pageHeader() { return $(".title") }
    get registerButton() { return $("[value=Register]") }
    get welcomeUser() { return $("#rightPanel>h1") }
    get welcomeMessage() { return $("#rightPanel>p") }

    private elementByLabel(label: string) {
        return $(`//b[text()='${label}:']/..//following-sibling::td/input`);
    }

    async registerNewUser(options: CreateAccountType) {
        await this.setData(this.elementByLabel("First Name"), options.firstName);
        await this.setData(this.elementByLabel("Last Name"), options.lastName);
        await this.setData(this.elementByLabel("Address"), options.address);
        await this.setData(this.elementByLabel("City"), options.city);
        await this.setData(this.elementByLabel("State"), options.state);
        await this.setData(this.elementByLabel("Zip Code"), options.zipCode);
        await this.setData(this.elementByLabel("Phone #"), options.phoneNo);
        await this.setData(this.elementByLabel("SSN"), options.ssn);
        await this.setData(this.elementByLabel("Username"), options.userName);
        await this.setData(this.elementByLabel("Password"), options.password);
        await this.setData(this.elementByLabel("Confirm"), options.confirm);
        await this.clickElement(this.registerButton);
    }

}
export default new RegisterPage()
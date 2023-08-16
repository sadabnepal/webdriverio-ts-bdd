import { CreateAccountType } from "../types/custom";
import BasePage from "./base.page";
import { formInputElementByLabel } from "./common.element";


class RegisterPage extends BasePage {

    get pageHeader() { return $("//div[not(@class='ng-hide')]/h1[@class='title']") }
    get registerButton() { return $("[value=Register]") }
    get welcomeUser() { return $("#rightPanel>h1") }
    get welcomeMessage() { return $("#rightPanel>p") }

    async registerNewUser(options: CreateAccountType) {
        await this.setData(formInputElementByLabel("First Name"), options.firstName);
        await this.setData(formInputElementByLabel("Last Name"), options.lastName);
        await this.setData(formInputElementByLabel("Address"), options.address);
        await this.setData(formInputElementByLabel("City"), options.city);
        await this.setData(formInputElementByLabel("State"), options.state);
        await this.setData(formInputElementByLabel("Zip Code"), options.zipCode);
        await this.setData(formInputElementByLabel("Phone #"), options.phoneNo);
        await this.setData(formInputElementByLabel("SSN"), options.ssn);
        await this.setData(formInputElementByLabel("Username"), options.userName);
        await this.setData(formInputElementByLabel("Password"), options.password);
        await this.setData(formInputElementByLabel("Confirm"), options.confirm);
        await this.clickElement(this.registerButton);
    }

}
export default new RegisterPage()
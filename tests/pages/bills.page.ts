import { BillPaymentType } from "../types/custom";
import BasePage from "./base.page";
import { formAmountElementByLabel, formInputElementByLabel } from "./common.element";

class BillsPage extends BasePage {

    private get sendPaymentButton() { return $("[value='Send Payment']") }

    get billPaymentMessage() { return $("//div[@ng-show='showResult']/p[1]"); }

    async billPayment(options: BillPaymentType) {
        await this.setData(formInputElementByLabel("Payee Name"), options.PayeeName);
        await this.setData(formInputElementByLabel("Address"), options.Address);
        await this.setData(formInputElementByLabel("City"), options.City);
        await this.setData(formInputElementByLabel("State"), options.State);
        await this.setData(formInputElementByLabel("Zip Code"), options.ZipCode);
        await this.setData(formInputElementByLabel("Phone #"), options.PhoneNo);
        await this.setData(formInputElementByLabel("Account #"), options.AccountNumber);
        await this.setData(formInputElementByLabel("Verify Account #"), options.AccountNumber);
        await this.setData(formAmountElementByLabel("Amount"), options.Amount);
        await this.clickElement(this.sendPaymentButton);

    }

}
export default new BillsPage()
import supertest from 'supertest';
import BasePage from "./base.page";

const splitBasedOnDollarAndConvertToNumber = (value: string) => Number(value.split("$")[1]);

class AccountPage extends BasePage {
    private get accountRow() { return $("tbody>tr:first-child") }
    get accountNumber() { return this.accountRow.$("td:nth-child(1)") }
    private get accountBalance() { return this.accountRow.$("td:nth-child(2)") }

    async waitUntilBalanceDisplayed() {
        await browser.waitUntil(async () => await this.accountBalance.getText() !== "");
    }

    async getAccountBalance() {
        const balance = await this.accountBalance.getText();
        return splitBasedOnDollarAndConvertToNumber(balance);
    }

    async depositAmountViaAPI(accountNumber: string, depositAmount: number) {
        const url = `https://parabank.parasoft.com/parabank/services/bank`;
        const endpoint = `/deposit?accountId=${accountNumber}&amount=${depositAmount}`;
        return await supertest(url).post(endpoint).expect(200);
    }

}
export default new AccountPage();
import { Then, When } from "@wdio/cucumber-framework";
import { BillPaymentData } from "../../data/random";
import accountsPage from "../../pages/accounts.page";
import billsPage from "../../pages/bills.page";

let accountNumber: string;

Then(/^I deposit amount via API and validate updated amount$/, async () => {
    await accountsPage.waitUntilBalanceDisplayed();
    accountNumber = await accountsPage.accountNumber.getText();
    const accountBalance = await accountsPage.getAccountBalance();
    const depositAmount = 32000;

    const response = await accountsPage.depositAmountViaAPI(accountNumber, depositAmount);

    await browser.refresh();
    await accountsPage.waitUntilBalanceDisplayed();

    const updateAccountBalance = await accountsPage.getAccountBalance();
    const expectedAPIResponse = `Successfully deposited $${depositAmount} to account #${accountNumber}`;

    expect(response.text).toEqual(expectedAPIResponse);
    expect(updateAccountBalance).toEqual(accountBalance + depositAmount)
})

When("I make bill payment with amount {string}", async (amount: number) => {
    await billsPage.billPayment(BillPaymentData(accountNumber, amount))
})

Then("I validate bill payment of {string} is successful", async (amount: number) => {
    const expectedMessage = `Bill Payment to test in the amount of $${amount}.00 from account ${accountNumber} was successful.`;
    await expect(billsPage.billPaymentMessage).toHaveText(expectedMessage)
})
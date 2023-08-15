import { Then } from "@wdio/cucumber-framework";
import accountsPage from "../../pages/accounts.page";

Then(/^I deposit amount via API and validate updated amount$/, async () => {
    await accountsPage.waitUntilBalanceDisplayed();
    const accountNumber = await accountsPage.accountNumber.getText();
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
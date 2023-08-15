import { Then, When } from "@wdio/cucumber-framework";
import { RegisterUserData, userName } from "../../data/register";
import registerPage from "../../pages/register.page";

Then(/^I should be navigated to "([^"]*)?" page$/, async (pageHeader: string) => {
    await expect(registerPage.pageHeader).toHaveText(pageHeader);
})

When(/^I register new user with random data$/, async () => {
    await registerPage.registerNewUser(RegisterUserData);
})

Then(/^I validate welcome and successful account creation message$/, async () => {
    await expect(registerPage.welcomeUser).toHaveText(`Welcome ${userName}`);
    await expect(registerPage.welcomeMessage).toHaveText("Your account was created successfully. You are now logged in.")
})
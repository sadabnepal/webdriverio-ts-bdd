import { Given, When, Then } from '@cucumber/cucumber'
import authpage from '../../main/pages/AuthenticationPage'
import createaccount from '../../main/pages/createAccountPage'
import { CREATE_ACCOUNT_LABEL, WELCOME_TO_ACCOUNT_MSG } from '../../main/constants/accounts'
import { waitUntillCondition } from '../../main/utils/WaitUtils';
import AssertionUtils from '../../main/utils/AssertionUtils';
import signupdata from '../../test/data/SignUp.json'
import fakerAPI from 'faker'
import homepage from '../../main/pages/homepage';

Given("I open browser and load the url", async () => {
    await homepage.open()
})

Then("I validate page title", async () => {
    AssertionUtils.validatePageTitle("My Store");
})

Then("homepage should be displayed", async () => {
    await AssertionUtils.toBeDisplayed(homepage.homepage_logo);
})

When("I click on SignIn Menu", async () => {
    await homepage.clickOnSignin();
})

Then("I should be navigated to Authentication page", async () => {
    await AssertionUtils.toHaveText(authpage.navigation_page, 'Authentication')
})

Then("Create Account panel should be displayed", async () => {
    await AssertionUtils.toBeDisplayed(authpage.createAccount_panel);
})

Then("Already Registered panel should be displayed", async () => {
    await AssertionUtils.toBeDisplayed(authpage.alreadyRegister_panel);
})

When("I type Email address and Click on Create Account", async () => {
    await authpage.setEmail(fakerAPI.internet.email())
    await AssertionUtils.toHaveAttributeContaining(authpage.email_input_status, 'class', 'form-ok');
    await authpage.clickOnCreateAccount();
})

Then("I should be navigated to Create Account page", async () => {
    await AssertionUtils.toBeDisplayed(createaccount.accountCreationForm);
    await waitUntillCondition(
        await createaccount.CreateAccountHeader.getText() === CREATE_ACCOUNT_LABEL,
        5000,
        "Failed to load Create Account Page"
    )
    await AssertionUtils.toHaveText(createaccount.CreateAccountHeader, CREATE_ACCOUNT_LABEL)
})

When("I fill all mandate fields and click on Register Button", async () => {
    await createaccount.setFirstName(signupdata.First_Name)
    await createaccount.setLastName(signupdata.Last_Name)
    await createaccount.setPassword(fakerAPI.internet.password(8))
    await createaccount.selectDayOfDOB(signupdata.DOB_Day)
    await createaccount.selectMonthofDOB(signupdata.DOB_Month)
    await createaccount.selectYearOfDOB(signupdata.DOB_Year)
    await createaccount.setAddressFirstName(signupdata.First_Name)
    await createaccount.setAddressLastName(signupdata.Last_Name)
    await createaccount.setCompany(signupdata.Company)
    await createaccount.setAddress1(signupdata.Address1)
    await createaccount.setCity(signupdata.City)
    await createaccount.selectState(signupdata.State)
    await createaccount.setPostCode(signupdata.PostCode)
    await createaccount.selectCountry(signupdata.Country)
    await createaccount.setAdditionalInfo(signupdata.Additional_Info)
    await createaccount.setMobilePhone(signupdata.Mobile_No)
    await createaccount.setAddressAlias(signupdata.Address_Alias)
    await createaccount.clickOnRegisterButton()
})

Then("Welcome message should be displayed", async () => {
    await AssertionUtils.toHaveText(createaccount.welcome_msg, WELCOME_TO_ACCOUNT_MSG);
})
import { Given, When, Then } from '@cucumber/cucumber'
import authpage from '../../main/pages/AuthenticationPage'
import createaccount from '../../main/pages/createAccountPage'
import { CREATE_ACCOUNT_LABEL, WELCOME_TO_ACCOUNT_MSG } from '../../main/constants/accounts'
import WaitUtils from '../../main/utils/WaitUtils';
import AssertionUtils from '../../main/utils/AssertionUtils';
import signupdata from '../../test/data/SignUp.json'
import fakerAPI from 'faker'
import homepage from '../../main/pages/homepage';

Given("I open browser and load the url", () => {
    homepage.open()
})

Then("I validate page title", () => {
    AssertionUtils.validatePageTitle("My Store");
})

Then("homepage should be displayed", () => {
    AssertionUtils.toBeDisplayed(homepage.getHomepageLogo());
})

When("I click on SignIn Menu", () => {
    homepage.clickOnSignin();
})

Then("I should be navigated to Authentication page", () => {
    AssertionUtils.toHaveText(authpage.authenticationPageNavigation(), 'Authentication')
})

Then("Create Account panel should be displayed", () => {
    AssertionUtils.toBeDisplayed(authpage.getCreateAccountPanel());
})

Then("Already Registered panel should be displayed", () => {
    AssertionUtils.toBeDisplayed(authpage.getAlreadyRegisterPanel());
})

When("I type Email address and Click on Create Account", () => {
    authpage.setEmail(fakerAPI.internet.email())
    AssertionUtils.toHaveAttributeContaining(authpage.getEmailInputStatus(), 'class', 'form-ok');
    authpage.clickOnCreateAccount();
})

Then("I should be navigated to Create Account page", () => {
    AssertionUtils.toBeDisplayed(createaccount.getAccountCreationForm());
    WaitUtils.waitUntillCondition(
        createaccount.getAccountCreationHeaderText() === CREATE_ACCOUNT_LABEL,
        5000,
        "Failed to load Create Account Page"
    )
    AssertionUtils.toEqual(createaccount.getAccountCreationHeaderText(), CREATE_ACCOUNT_LABEL)
})

When("I fill all mandate fields and click on Register Button", () => {
    createaccount
        .setFirstName(signupdata.First_Name)
        .setLastName(signupdata.Last_Name)
        .setPassword(fakerAPI.internet.password(8))
        .selectDayOfDOB(signupdata.DOB_Day)
        .selectMonthofDOB(signupdata.DOB_Month)
        .selectYearOfDOB(signupdata.DOB_Year)
        .setAddressFirstName(signupdata.First_Name)
        .setAddressLastName(signupdata.Last_Name)
        .setCompany(signupdata.Company)
        .setAddress1(signupdata.Address1)
        .setCity(signupdata.City)
        .selectState(signupdata.State)
        .setPostCode(signupdata.PostCode)
        .selectCountry(signupdata.Country)
        .setAdditionalInfo(signupdata.Additional_Info)
        .setMobilePhone(signupdata.Mobile_No)
        .setAddressAlias(signupdata.Address_Alias)
        .clickOnRegisterButton()
})

Then("Welcome message should be displayed", () => {
    AssertionUtils.toEqual(createaccount.getWelcomeMessage(), WELCOME_TO_ACCOUNT_MSG);
})
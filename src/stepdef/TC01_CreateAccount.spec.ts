import {Given, When, Then} from '@cucumber/cucumber'
import homepage from 'src/pages/HomePage';
import authpage from 'src/pages/AuthenticationPage'
import createaccount from 'src/pages/CreateAccountPage'
import accountConstant from 'src/constants/accounts'
import WaitUtils from 'utils/WaitUtils';
import AssertionUtils from 'utils/AssertionUtils';
import signupdata from 'src/testdata/SignUp.json'
import fakerAPI from 'faker'

Given("I open browser and load the url", ()=> {
    homepage.open()
})

Then("homepage should be displayed", ()=> {
    AssertionUtils.toBeDisplayed(homepage.getHomepageLogo());
})

When("I click on SignIn Menu", ()=> {
    homepage.clickOnSignin();
})

Then("I should be navigated to Authentication page", ()=> {
    AssertionUtils.toHaveText(authpage.authenticationPageNavigation(), 'Authentication')
})

Then("Create Account panel should be displayed", ()=> {
    AssertionUtils.toBeDisplayed(authpage.getCreateAccountPanel());
})

Then("Already Registered panel should be displayed", ()=> {
    AssertionUtils.toBeDisplayed(authpage.getAlreadyRegisterPanel()); 
})

When("I type Email address and Click on Create Account", ()=> {
	authpage.setEmail(fakerAPI.internet.email())
    AssertionUtils.toHaveAttributeContaining(authpage.getEmailInputStatus(), 'class', 'form-ok');
    authpage.clickOnCreateAccount();
})

Then("I should be navigated to Create Account page", ()=> {
    AssertionUtils.toBeDisplayed(createaccount.getAccountCreationForm());
    WaitUtils.waitUntillCondition(
        createaccount.getAccountCreationHeaderText() === accountConstant.CREATE_ACCOUNT_LABEL,
        5000,
        "Failed to load Create Account Page"
        )
    AssertionUtils.toEqual(createaccount.getAccountCreationHeaderText(), accountConstant.CREATE_ACCOUNT_LABEL)
})

When("I fill all mandate fields and click on Register Button", ()=> {
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

Then("Welcome message should be displayed", ()=> {
    AssertionUtils.toEqual(createaccount.getWelcomeMessage(), accountConstant.WELCOME_TO_ACCOUNT_MSG);
})
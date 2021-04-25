import {Given, When, Then} from '@cucumber/cucumber'
import {expect} from 'chai'
import homepage from 'src/pages/homepage';
import authpage from 'src/pages/AuthenticationPage'
import util from 'utils/Utilities'
import createaccount from 'src/pages/createAccountPage'
import constants_acc from 'src/constants/accounts'
import allureReporter from '@wdio/allure-reporter'

var email:string;
var password:string;

Given("I open browser and load the url", ()=> {
    homepage.open()
})

Then("homepage should be displayed", ()=> {
	allureReporter.addFeature('Test homepage logo');
	allureReporter.addSeverity('minor');
    expect(homepage.doHomepageLogoDisplayed()).to.be.true;
})

When("I click on SignIn Menu", ()=> {
    homepage.clickOnSignin();
})

Then("I should be navigated to Authentication page", ()=> {
	allureReporter.addFeature('Test Authentication page navigation')
	allureReporter.addSeverity('critical');
    expect(authpage.authenticationPageNavigationText()).equals("Authentication")
})

Then("Create Account panel should be displayed", ()=> {
    expect(authpage.createAccount_panel_isDisplayed()).to.be.true;
})

Then("Already Registered panel should be displayed", ()=> {
    expect(authpage.alreadyRegister_panel_isDisplayed()).to.be.true; 
})

When("I type Email address and Click on Create Account", ()=> {
	allureReporter.addFeature('Test successfull account creation message')
	allureReporter.addSeverity('blocker');
    email = util.generateString(7)+"@test.com";
    console.log("Email Generated: "+email);
    var email_field_status = authpage.setEmail(email)
    expect(email_field_status).to.be.includes('form-ok');
    authpage.clickOnCreateAccount();
})

Then("I should be navigated to Create Account page", ()=> {
    expect(createaccount.accountCreationForm_isDisplayed()).to.be.true;
    util.waitUntillConidtion(
        createaccount.getAccountCreationHeaderText() === constants_acc.CREATE_ACCOUNT_LABEL,
        5000,
        "Failed to load Create Account Page"
        )
    expect(createaccount.getAccountCreationHeaderText()).to.be.equals(constants_acc.CREATE_ACCOUNT_LABEL)
})

When("I fill all mandate fields and click on Register Button", ()=> {
    password = util.generatePassword(8);
    console.log("Password Geneerated: "+password)
    createaccount.submitAccountCreationForm(password);
})

Then("Welcome message should be displayed", ()=> {
    expect(createaccount.getError()).is.not.true;
    console.log("Message: "+createaccount.getWelcomeMessage())
    expect(createaccount.getWelcomeMessage()).equals(constants_acc.WELCOME_TO_ACCOUNT_MSG);
})
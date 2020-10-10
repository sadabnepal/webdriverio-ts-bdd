import {Given, When, Then} from 'cucumber'
import createAc from 'src/pages/createAccount'

Given("I open browser and load the url", ()=> {
    // createAc.openApplication();
    browser.url("http://automationpractice.com/index.php");
    browser.pause(3000);
    console.log("*************"+browser.getTitle());
    $("#header_logo").waitForDisplayed();
})

Then("homepage should be displayed", ()=> {
    console.log("Test")
})
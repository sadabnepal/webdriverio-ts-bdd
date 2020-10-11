Feature: Test Automation Practise application
    Scenario: Validate Sign Up
        Given I open browser and load the url
        Then homepage should be displayed
        When I click on SignIn Menu
        Then I should be navigated to Authentication page
            And Create Account panel should be displayed
            And Already Registered panel should be displayed
        When I type Email address and Click on Create Account
        Then I should be navigated to Create Account page
        When I fill all mandate fields and click on Register Button
        Then Welcome message should be displayed
    
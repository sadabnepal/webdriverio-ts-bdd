Feature: Automation Practice App Status

    Scenario: Test application authenication page header
        Given I am on the home page of automation practice website
        When I click on sign in button
        Then  I must be navigated to my account page with header as "Login Page"
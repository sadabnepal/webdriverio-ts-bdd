Feature: AutomationPractice signup and order product

    Scenario: Test Signup and order placing flow
        Given I am on the home page of automation practice website
        When I click on sign in button
        Then  I must be navigated to my account page with header as "AUTHENTICATION"
        When I enter email address and click on create account
        Then I should see page header text as "CREATE AN ACCOUNT"
        When I fill all mandatory fields and click on register button
        Then I should be navigated to "MY ACCOUNT" page
        When I click on Women item and add dress to cart
        Then I should see product added message as "Product successfully added to your shopping cart"
        When I click on proceed to checkout
        Then I should see the shopping cart header as "SHOPPING-CART SUMMARY"
        When I click on proceed to checkout button
        Then I should see address header as "ADDRESSES"
        When I should click proceed to checkout
        Then I should be navigated to shipping page and see the header as "SHIPPING"
        When I check terms and conditions and click on proceed to checkout
        Then I should see paymet method header as "PLEASE CHOOSE YOUR PAYMENT METHOD"
        When I select payment option and confirm order
        Then I should see header as "ORDER CONFIRMATION"

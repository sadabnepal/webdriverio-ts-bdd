Feature: Parabank app test

    Scenario: Test home page logo and left menu items
        Given I am on the home page
        Then I validate home page logo
        And I validate left menu items
            | LeftMenuItems |
            | Solutions     |
            | About Us      |
            | Services      |
            | Products      |
            | Locations     |
            | Admin Page    |

    Scenario: Test new account register
        Given I am on the home page
        Then I validate home page logo
        When I user click on "Register" link
        Then I should be navigated to "Signing up is easy!" page
        When I register new user with random data
        Then I validate welcome and successful account creation message

    # Scenario: Test login with existing user
    #     Given I am on the home page
    #     Then I validate home page logo
    #     When I login with existing user

    Scenario: Test Account update via api
        When I user click on "Accounts Overview" link
        Then I should be navigated to "Accounts Overview" page
        Then I deposit amount via API and validate updated amount
        When I user click on "Bill Pay" link
        Then I should be navigated to "Bill Payment Service" page
        When I make bill payment with amount "6500"
        Then I should be navigated to "Bill Payment Complete" page
        And I validate bill payment of "6500" is successful

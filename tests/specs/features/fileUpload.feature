Feature: File Upload

    Scenario: Test upload file
        Given I open heroku app upload page
        When I upload file
        Then I validate file is uploaded successfully
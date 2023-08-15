Feature: File Upload

    Scenario: Test upload file
        Given I open herokuapp upload page
        When I upload file
        Then I validate file is uploaded successfully
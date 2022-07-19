Feature: HMRC Website

    Scenario: Navigate the HMRC website
        Given I navigate to HMRC website
        When I click Income Tax and Income Tax in Wales
        Then The tax band for Wales should be displayed
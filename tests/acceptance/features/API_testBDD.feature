Feature: API testing

    Scenario: Navigate to the API
        Given I make a GET request to the api
        When I get the GET request response 
        Then The response should contain details for emplyees id 12

        Given I make a POST request to the api
        When I get the response 
        Then The response should contain the created employee details

        Given I make a PUT request to the api
        When I get the PUT request response 
        Then The response should contain the updated employee details
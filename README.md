# PlayWrightJS-UI-and-API-Test
New Playwright UI and API test

Playwright framework is an open-source, Nodejs based automation framework for end-to-end testing. It is developed and maintained by Microsoft. Its main goal is to run across the major browser engines – Chromium, Microsoft Edge, Webkit, and Firefox with a single API.

The above UI and API tests were created using Jest and also using Cucumber (Given When Then) feature files
The Jest test runs headless by default (See playwright instcctions here https://playwright.dev/docs/intro)

To run the Jest UI and API test in this project:
 - On CLI use command: npx playwright test 
 - for headed mode run: use npx playwright test --headed
 - for the Jest Playwright report, on CLI run: npx playwright show-report
 
To run the Cucumber (Given When Then) feature files UI and API test in this project:
 - On CLI use command: npm run test:e2e tests/acceptance/features 
 - to run the Cucumber feature files headless or headed, just change the value of headless to true or false as you wish, in the /cucumber.conf.js file 

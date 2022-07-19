const {
  Given,
  When,
  Then
} = require('@cucumber/cucumber')
// import expect for assertion
const {
  expect,
  test,
  request
} = require("@playwright/test");
const url = ("https://jsonplaceholder.typicode.com/posts")
let postUrl
let putUrl
let getUrl
let recordResponse;
let apiContext;
let responseBody

const detailsPayload = {
  userId: 1,
  title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  id: 101
}
const detailsPayload2 = {
  userId: 2,
  id: 12,
  title: "in quibusdam tempore odit est dolorem",
  body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
}


Given('I make a GET request to the api', async function () {
  getUrl = (url + "/12")

});

When('I get the GET request response', async function () {
  apiContext = await request.newContext();
  recordResponse = await apiContext.get(getUrl)
  responseBody = JSON.parse(await recordResponse.text())

});

Then('The response should contain details for emplyees id 12', async function () {
  await expect(recordResponse.ok()).toBeTruthy();
  await expect(recordResponse.status()).toBe(200);
  await expect(responseBody).toEqual(detailsPayload2);

});

Given('I make a POST request to the api', async function () {
  postUrl = url

});

When('I get the response', async function () {
  apiContext = await request.newContext();
  recordResponse = await apiContext.post(postUrl, {
    data: detailsPayload

  })
  responseBody = JSON.parse(await recordResponse.text())

});

Then('The response should contain the created employee details', async function () {
  await expect(recordResponse.ok()).toBeTruthy();
  await expect(recordResponse.status()).toBe(201);
  await expect(responseBody).toEqual(detailsPayload);

});

Given('I make a PUT request to the api', async function () {
  putUrl = (url + "/12")

});

When('I get the PUT request response', async function () {
  apiContext = await request.newContext();
  recordResponse = await apiContext.put(putUrl, {
    data: detailsPayload2

  })
  responseBody = JSON.parse(await recordResponse.text())

});

Then('The response should contain the updated employee details', async function () {
  await expect(recordResponse.ok()).toBeTruthy();
  await expect(recordResponse.status()).toBe(200);
  await expect(responseBody).toEqual(detailsPayload2);

});
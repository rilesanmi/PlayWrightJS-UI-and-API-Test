const {
  expect,
  test,
  request
} = require("@playwright/test");
const url = ("https://jsonplaceholder.typicode.com/posts")

const detailsPayload = {
  userId: 1,
  id: 3,
  title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
}
const detailsPayload2 = {
  userId: 2,
  id: 12,
  title: "Thein quibusdam tempore odit est dolorem",
  body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
}


test('New API  POST request test JEST', async () => {
  const apiContext = await request.newContext();
  const recordResponse = await apiContext.post(url, {
    data: detailsPayload

  })
  await expect(recordResponse.ok()).toBeTruthy();

});

test('New API  GET request test JEST', async () => {
  const apiContext = await request.newContext();
  const recordResponse = await apiContext.get(url + "/3");
  const recordResponseJson = await recordResponse.json();

  await expect(recordResponseJson).toEqual(detailsPayload);

});

test('New API  PUT request test JEST', async () => {
  const apiContext = await request.newContext();
  const recordResponse = await apiContext.put(url + "/12", {
    data: detailsPayload2

  })
  const recordResponseJson = await recordResponse.json();

  await expect(recordResponseJson).toEqual(detailsPayload2);

});
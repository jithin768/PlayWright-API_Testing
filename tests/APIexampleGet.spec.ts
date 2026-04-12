import { test, expect } from '@playwright/test';

test('Get request to API', async ({ request }) => {

  const response= await request.get('https://api.restful-api.dev/objects')
  console.log(await response.json());
  console.log(await response.status());
  expect(response.status()).toBe(200);
  
});

test('Get request API Example 2', async ({ request }) => {

  const response=await request.get('https://api.restful-api.dev/objects/7')
  var responsedata=await response.json();
   console.log(responsedata)

  var namevalue=responsedata.name;
  console.log(namevalue)

  var response_year=responsedata.data.year;
  console.log(response_year)
  console.log(await response.json());

})

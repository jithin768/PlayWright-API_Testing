import { test, expect } from '@playwright/test';

test('Delete request to API', async ({ request }) => {

  const response= await request.delete('https://api.restful-api.dev/objects/ff8081819d62221a019d8065b8f824c8')

  var responsedata=await response.json();

  var message=responsedata.message;
  console.log(message)


  
});


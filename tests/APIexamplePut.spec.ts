import { test, expect } from '@playwright/test';

test('PUT request to API', async ({ request }) => {

  const response= await request.put('https://api.restful-api.dev/objects/ff8081819d62221a019d8065b8f824c8',
    {
      headers:{"Content-Type":"application/json"},
      data:{"name": "Jithin MacBook Pro 16",
    "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }}
    })

    var responsedata=await response.json();
    console.log(responsedata)

    var updatedAt=responsedata.updatedAt;
    console.log(updatedAt)

  
});


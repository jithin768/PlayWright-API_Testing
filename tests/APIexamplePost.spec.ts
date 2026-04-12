import { test, expect } from '@playwright/test';

test('POST request to API', async ({ request }) => {

  const response= await request.post('https://api.restful-api.dev/objects',
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

  
});


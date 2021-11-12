#!/usr/bin/node

const request = require('request');
const ac = process.argv.slice(2);

request.get(`https://swapi-api.hbtn.io/api/films/${ac}/`, async (_error, response, body) => {
  const characters = JSON.parse(body).characters;
  for (const character of characters) {
    const charac = await new Promise((resolve, reject) => {
      request(character, (errors, responses, bodys) => {
        if (errors) {
          reject(errors);
        } else {
          resolve(JSON.parse(bodys).name);
        }
      });
    });
    console.log(charac);
  }
});
<<<<<<< HEAD

function recursionRequestPrint (url, index) {
  request(url[index], (err, res, body) => {
    if (!err) {
      console.log(JSON.parse(body).name);
      if (index + 1 < url.length) recursionRequestPrint(url, ++index);
    }
  });
} 
=======
>>>>>>> ab6859ac01041f1f8ef07987ad4eadd9ce04896b

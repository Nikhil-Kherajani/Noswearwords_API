<div align=center>
    <h1>Noswearwords_API</h1>
    <a href="" target="_blank">Made on 🌍 by a Human</a>
</div>

## About The Project

This is a REST API code that has been implemented using the Express.js framework.

The API listens to incoming HTTP POST requests on the endpoint "/check-for-swear-words" and takes in a JSON request body that has a single property "text", which is a string that needs to be checked for the presence of swear words.

## Core Features

<b>The API returns a JSON response containing two properties:

* <b>"containsSwearWord": A boolean value indicating whether the input string contained a swear word.</b>
* <b>"swearWord": A string that contains the first swear word found in the input string.</b>

<br />

## Instructions for using the API

### API : https://noswearwordsapi-production.up.railway.app/

### POST : https://noswearwordsapi-production.up.railway.app/check-for-swear-words
#### If the above API doesn't work, use this one instead 👇
### POST : https://marvelously-shiny-neutrino-castle.wayscript.cloud/check-for-swear-words

#### Example :

```
const fetch = require("cross-fetch");

fetch(
  "https://noswearwordsapi-production.up.railway.app/check-for-swear-words",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: "It's not okay to use the word fuck" }),
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

#### Response :

```
{ containsSwearWord: true, swearWord: 'fuck' }
```

## Built With

Here's a curated list of all the major technologies that have been used to build This API:

* <b>[Express](https://expressjs.com/)</b> : For implementing the API's Backend.
* <b>[JavaScript](https://www.javascript.com/)</b> : As a primary Programming Language.
* <b>[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)</b> : A built-in JavaScript data structure that is used to store the list of swear words in memory.
* <b>[JSON](https://www.json.org/json-en.html)</b> : Use to send and receive data in a structured format.
* <b>[HTTP](https://www.cloudflare.com/en-gb/learning/ssl/what-is-https/)</b> : To use HTTP methods like POST to accept and process incoming requests and HTTP status codes to communicate the outcome of the request.


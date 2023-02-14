# Noswearwords_API

This API accepts a string as a request and returns a swear word if it exists in the string; otherwise, it returns an empty string with false as a response.

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

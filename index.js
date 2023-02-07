const swearWords = new Set(require("./swear-words.js"));

const express = require("express");

const app = express();

app.use(express.json());

app.post("/check-for-swear-words", (req, res) => {
  const { text } = req.body;
  const text1 = text.toLowerCase();
  let ans1 = false;
  let ans2 = "";
  let start = 0;

  for (let i = 0; i < text1.length; i++) {
    if (text1.charAt(i) == " " || i == text1.length - 1) {
      if (i == text1.length - 1 && text1.charAt(i) != " ") {
        i++;
      }
      if (swearWords.has(text1.substring(start, i))) {
        ans1 = true;
        ans2 += text1.substring(start, i);
        break;
      } else {
        start = i + 1;
      }
    }
  }

  res.json({ containsSwearWord: ans1, swearWord: ans2 });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("API listening on port 3000");
});

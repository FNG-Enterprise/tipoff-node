require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 8000

app.get('/test', (req, res) => {
  res.send('test passed')
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
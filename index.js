require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db/controllers/');

const app = express();
const port = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, "./client/dist")));


app.get('/test', (req, res) => {
  res.send('test passed');
});

// signup
app.post('/signup', (req, res) => {
  // res.send('signup ok');
  db.signup()
  .then(response => {
    res.send(response + ' (from db)');
  })
});

// login
app.post('/login', (req, res) => {
  // res.send('login ok');
  db.checkLogin()
  .then(response => {
    res.send(response + ' (from db)');
  })
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
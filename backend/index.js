const express = require('express');
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(Success! Your application is running on port ${port}.);
})
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
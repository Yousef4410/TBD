var express = require('express');
var app = express();


app.use(express.json());

app.get('/', (req, res)) {
  res.send('Hello world')
}

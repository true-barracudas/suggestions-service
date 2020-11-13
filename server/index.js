const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// serve up static files
//console.log(__dirname);
app.use(express.static(__dirname + '/../client/dist'));

// set up routes
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})
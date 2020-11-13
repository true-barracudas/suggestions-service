const express = require('express');
var bodyParser = require('body-parser');
var db = require('../db/db.js');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// serve up static files
app.use(express.static(__dirname + '/../client/dist'));

// set up routes
app.get('/api/suggestions', (req, res) => {
  db.findRecord(req.body.id)
  .then((record) => {
    res.status(200).send(record);
    console.log('Successfully retrieved record: ', record);
  })
  .catch(err => {
    res.status(404).send(err);
    console.log('Unable to get record: ', err);
  });
})

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})
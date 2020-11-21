const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/controllers/db.js');

const app = express();

app.use(bodyParser.json());

// serve up static files
app.use(express.static(path.join(__dirname, '/../client/dist')));

// set up routes
app.get('/api/products/:id/suggestions', (req, res) => {
  db.findRecord(parseInt(req.params.id, 10))
    .then((record) => {
      res.status(200).send(record);
      console.log('Successfully retrieved record: ', record);
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log('Unable to get record: ', err);
    });
});

module.exports = app;

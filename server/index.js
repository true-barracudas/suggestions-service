const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const db = require('../db/controllers/db.js');

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(express.static(path.join(__dirname, '/../client/dist')));

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

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

module.exports = app;

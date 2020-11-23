const mongoose = require('mongoose');
const Suggestion = require('../models/suggestion.js');

mongoose.connect('mongodb://database/suggestions', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

const save = (data) => Suggestion.create(data);

const findRecord = (id) => Suggestion.find({ shoeID: id }).exec();

module.exports = {
  save,
  findRecord,
};

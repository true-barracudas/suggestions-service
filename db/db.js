const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

const shoeSchema = new mongoose.Schema({
  id: 'Number',
  shoe_url: 'String',
  series: 'String',
  type: 'String',
  price: 'Number',
  sale_price: 'Number',
  is_favorite: 'Boolean',
  recycled_materials: 'Boolean',
});

const suggestionSchema = new mongoose.Schema({
  shoe_id: 'Number',
  list: [shoeSchema],
});

const Suggestion = mongoose.model('suggestion', suggestionSchema);

const save = (data) => Suggestion.create(data);

const findRecord = (id) => Suggestion.find({ shoe_id: id }).exec();

module.exports.save = save;
module.exports.findRecord = findRecord;

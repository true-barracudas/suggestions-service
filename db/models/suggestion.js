const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  id: 'Number',
  shoeUrl: 'String',
  series: 'String',
  type: 'String',
  price: 'Number',
  salePrice: 'Number',
  isFavorite: 'Boolean',
  recycledMaterials: 'Boolean',
});

const suggestionSchema = new mongoose.Schema({
  shoeID: 'Number',
  list: [shoeSchema],
});

const Suggestion = mongoose.model('suggestion', suggestionSchema);

module.exports = Suggestion;

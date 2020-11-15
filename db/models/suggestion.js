const mongoose = require('mongoose');

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

module.exports = Suggestion;

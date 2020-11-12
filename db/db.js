const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

const shoeSchema = new mongoose.Schema({
  id: 'Number',
  shoe_url: 'String',
  series: 'String',
  type: 'String',
  price: 'Number',
  sale_price: 'Number',
  is_favorite: 'Boolean'
});

const suggestionSchema = new mongoose.Schema({
  shoe_id: 'Number',
  list: [shoeSchema]
});

const Suggestion = mongoose.model('suggestion', suggestionSchema);
let save = (data) => {
  Suggestion.create(data, err => {
    console.log('Error saving suggestions: ', err);
  });
};

module.exports.save = save;
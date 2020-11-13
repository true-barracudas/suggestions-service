const db = require('./db.js');
const faker = require('faker');


// possible selections
let imageUrls = ['https://fec-ay.s3-us-west-1.amazonaws.com/shoe1.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe2.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe3.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe4.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe5.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe6.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe7.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe8.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe9.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe10.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe11.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe12.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe13.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe14.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe15.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe16.jpg'
];
let shoeSeries = ['Originals', 'Performance'];
let shoeTypes = ['NMD_R1 SHOES', 'ULTRABOOST SHOES'];
let shoePrices = ['140', '130'];
let salePrices = ['112', '104', '0'];
let boolean = ['true', 'false'];

// helper function
let selectOne = (array) => {
  let i = Math.floor(Math.random() * array.length);
  return [i, array[i]];
}

// create 16 suggestions
createSuggestions = () => {
  let suggestions = [];
  let copyUrls = imageUrls.slice();

  for (let i = 1; i < 17; i++) {
    let [index, url] = selectOne(copyUrls);
    copyUrls.splice(index, 1);

    let shoe = {
      id: faker.random.number(),
      shoe_url: url,
      series: selectOne(shoeSeries)[1],
      type: selectOne(shoeTypes)[1],
      price: selectOne(shoePrices)[1],
      sale_price: selectOne(salePrices)[1],
      recycled_materials: selectOne(boolean)[1]
    }
    suggestions.push(shoe);
  }
  return suggestions;
}

createRecords = () => {
  let records = [];

  // create 100 records
  for (let i = 1; i < 101; i++) {
    let newRecord = {
      shoe_id: i,
      list: createSuggestions()
    }
    records.push(newRecord);
  }
  return records;
}

// save records into db
db.save(createRecords());
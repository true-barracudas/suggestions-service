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
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe16.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe17.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe18.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe19.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe20.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe21.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe22.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe23.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe24.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe25.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe26.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe27.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe28.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe29.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe30.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe31.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe32.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe33.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe34.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe35.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe36.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe37.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe38.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe39.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe40.jpg'
];
let shoeSeries = ['Originals', 'Performance', 'Running', 'Hiking', 'Essentials', 'Lifestyle', 'Basketball', 'Workout', 'Gym', 'Clean Classics'];
let shoeTypes = ['NMD_R1 SHOES', 'ULTRABOOST SHOES', 'ULTRABOOST ST SHOES', 'ULTRABOOST DNA SHOES', 'ULTRABOOST WINTER.RDY SHOES', 'BUSENITZ PRO SHOES', 'NIZZA TREFOIL SHOES', 'ZX 2K BOOST SHOES', 'OZWEEGO SHOES', 'NMD_R1 V2 SHOES'];
let shoePrices = ['150', '140', '130', '180', '175', '200', '165', '155', '185', '220'];
let salePrices = ['112', '104', '85', '90', '110', '122', '131','0', '0', '0', '0'];
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
    let url = copyUrls[i % 40];
    copyUrls.splice(copyUrls.indexOf(url), 1);

    let shoe = {
      id: faker.random.number(),
      shoe_url: url,
      series: shoeSeries[i % 10],
      type: shoeTypes[i % 10],
      price: shoePrices[i % 10],
      sale_price: salePrices[i % 10],
      recycled_materials: boolean[i % 2]
    };
    // let [index, url] = selectOne(copyUrls);
    // copyUrls.splice(index, 1);

    // let shoe = {
    //   id: faker.random.number(),
    //   shoe_url: url,
    //   series: selectOne(shoeSeries)[1],
    //   type: selectOne(shoeTypes)[1],
    //   price: selectOne(shoePrices)[1],
    //   sale_price: selectOne(salePrices)[1],
    //   recycled_materials: selectOne(boolean)[1]
    // }
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
db.save(createRecords())
.then((records) => {
  console.log('Successfully saved records', records);
})
.catch(err => {
  console.log('Error saving suggestions: ', err);
});

const faker = require('faker');
const db = require('./controllers/db.js');

// possible selections
const imageUrls = ['https://fec-ay.s3-us-west-1.amazonaws.com/shoe1.jpg',
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
  'https://fec-ay.s3-us-west-1.amazonaws.com/shoe40.jpg',
];
const shoeSeries = ['Originals', 'Performance', 'Running', 'Hiking', 'Essentials', 'Lifestyle', 'Basketball', 'Workout', 'Gym', 'Clean Classics'];
const shoeTypes = ['NMD_R1 SHOES', 'ULTRABOOST SHOES', 'ULTRABOOST ST SHOES', 'ULTRABOOST DNA SHOES', 'ULTRABOOST WINTER.RDY SHOES', 'BUSENITZ PRO SHOES', 'NIZZA TREFOIL SHOES', 'ZX 2K BOOST SHOES', 'OZWEEGO SHOES', 'NMD_R1 V2 SHOES'];
const shoePrices = ['150', '140', '130', '180', '175', '200', '165', '155', '185', '220'];
const salePrices = ['112', '104', '85', '90', '110', '122', '131', '0', '0', '0', '0'];
const boolean = ['true', 'false'];

const selectOne = (array) => {
  const i = Math.floor(Math.random() * array.length);
  return [i, array[i]];
};

// create 16 suggestions
const createSuggestions = () => {
  const suggestions = [];
  const copyUrls = imageUrls.slice();

  for (let i = 1; i < 17; i += 1) {
    const [index, url] = selectOne(copyUrls);
    copyUrls.splice(index, 1);

    const shoe = {
      id: faker.random.number(),
      shoeUrl: url,
      series: shoeSeries[i % 10],
      type: shoeTypes[i % 10],
      price: shoePrices[i % 10],
      salePrice: salePrices[i % 10],
      recycledMaterials: boolean[i % 2],
    };
    // let [index, url] = selectOne(copyUrls);
    // copyUrls.splice(index, 1);

    // let shoe = {
    //   id: faker.random.number(),
    //   shoeUrl: url,
    //   series: selectOne(shoeSeries)[1],
    //   type: selectOne(shoeTypes)[1],
    //   price: selectOne(shoePrices)[1],
    //   salePrice: selectOne(salePrices)[1],
    //   recycledMaterials: selectOne(boolean)[1]
    // }
    suggestions.push(shoe);
  }
  return suggestions;
};

const createRecords = () => {
  const records = [];

  // create 100 records
  for (let i = 1; i < 101; i += 1) {
    const newRecord = {
      shoeID: i,
      list: createSuggestions(),
    };
    records.push(newRecord);
  }
  return records;
};

// save records into db
db.save(createRecords())
  .then((records) => {
    console.log('Successfully saved records', records);
  })
  .catch((err) => {
    console.log('Error saving suggestions: ', err);
  });

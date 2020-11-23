const faker = require('faker');
const db = require('./controllers/db.js');

// possible selections
const imageUrls = ['https://fec-ay.s3-us-west-1.amazonaws.com/s1.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s2.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s3.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s4.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s5.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s6.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s7.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s8.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s9.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s10.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s11.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s12.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s13.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s14.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s15.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s16.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s17.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s18.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s19.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s20.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s21.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s22.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s23.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s24.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s25.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s26.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s27.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s28.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s29.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s30.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s31.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s32.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s33.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s34.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s35.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s36.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s37.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s38.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s39.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/s40.jpg',
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
    //console.log('Successfully saved records', records);
  })
  .catch((err) => {
    console.log('Error saving suggestions: ', err);
  });

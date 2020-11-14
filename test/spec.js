const { MongoClient } = require('mongodb');
const { Suggestion } = require('../db/db.js');

const testData = {
  shoe_id: 21,
  list: [{
    id: 23675,
    shoe_url: 'https://fec-ay.s3-us-west-1.amazonaws.com/shoe10.jpg',
    series: 'Performance',
    type: 'NIZZA TREFOIL SHOES',
    price: '140',
    sale_price: '104',
    recycled_materials: false,
  },
  {
    id: 87953,
    shoe_url: 'https://fec-ay.s3-us-west-1.amazonaws.com/shoe37.jpg',
    series: 'Essentials',
    type: 'ULTRABOOST SHOES',
    price: '180',
    sale_price: '0',
    recycled_materials: true,
  },
  ],
};

const testData1 = {
  shoe_id: 21,
  shoe_name: 'Ultraboost',
  list: [{
    id: 23675,
    shoe_url: 'https://fec-ay.s3-us-west-1.amazonaws.com/shoe10.jpg',
    series: 'Performance',
    color: 'Black',
    type: 'NIZZA TREFOIL SHOES',
    price: '140',
    sale_price: '104',
    recycled_materials: false,
  },
  {
    id: 87953,
    shoe_url: 'https://fec-ay.s3-us-west-1.amazonaws.com/shoe37.jpg',
    series: 'Essentials',
    type: 'ULTRABOOST SHOES',
    price: '180',
    sale_price: '0',
    recycled_materials: true,
  },
  ],
};

describe('Seeding database test', () => {
  let connection;
  let db;
  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  // normal use case
  it('should create & save user successfully', async () => {
    const validRecord = new Suggestion(testData);
    const savedRecord = await validRecord.save();
    expect(savedRecord._id).toBeDefined();
    expect(savedRecord.list.length).toBe(testData.list.length);
  });

  // test that the schema works
  it('should insert record successfully, but exclude the fields that are not defined in the schema', async () => {
    const invalidRecord = new Suggestion(testData1);
    const savedInvalidRecord = await invalidRecord.save();
    expect(savedInvalidRecord._id).toBeDefined();
    expect(savedInvalidRecord.shoe_name).toBeUndefined();
    expect(savedInvalidRecord.list[0].color).toBeUndefined();
  });
});

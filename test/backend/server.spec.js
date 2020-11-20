const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const request = require('supertest');
const Suggestion = require('../../db/models/suggestion.js');
const app = require('../../server/index.js');

// open connection to test DB
mongoose.connect('mongodb://localhost/fec-test', { useNewUrlParser: true, useUnifiedTopology: true });
const testDB = mongoose.connection;
testDB.on('error', console.error.bind(console, 'connection error:'));
testDB.once('open', () => {
  console.log('test db connected!');
});

// test data for mongo in-memory server
const testData = {
  shoeID: 21,
  list: [{
    id: 23675,
    shoeUrl: 'https://fec-ay.s3-us-west-1.amazonaws.com/shoe10.jpg',
    series: 'Performance',
    type: 'NIZZA TREFOIL SHOES',
    price: '140',
    salePrice: '104',
    recycledMaterials: false,
  },
  {
    id: 87953,
    shoeUrl: 'https://fec-ay.s3-us-west-1.amazonaws.com/shoe37.jpg',
    series: 'Essentials',
    type: 'ULTRABOOST SHOES',
    price: '180',
    salePrice: '0',
    recycledMaterials: true,
  },
  ],
};

const testData1 = {
  shoeID: 22,
  shoeName: 'Ultraboost',
  list: [{
    id: 23675,
    shoeUrl: 'https://fec-ay.s3-us-west-1.amazonaws.com/shoe10.jpg',
    series: 'Performance',
    color: 'Black',
    type: 'NIZZA TREFOIL SHOES',
    price: '140',
    salePrice: '104',
    recycledMaterials: false,
  },
  {
    id: 87953,
    shoeUrl: 'https://fec-ay.s3-us-west-1.amazonaws.com/shoe37.jpg',
    series: 'Essentials',
    type: 'ULTRABOOST SHOES',
    price: '180',
    salePrice: '0',
    recycledMaterials: true,
  },
  ],
};

// using mongo in-memory server
describe('Seeding database', () => {
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

  beforeEach(async () => {
    await db.collection('suggestions').deleteMany({});
  });

  // normal use case
  it('should create & save user successfully', async () => {
    const suggestions = db.collection('suggestions');
    const validRecord = new Suggestion(testData);
    await suggestions.insertOne(validRecord);
    const savedRecord = await suggestions.findOne({ shoeID: 21 });
    expect(savedRecord._id).toBeDefined();
    expect(savedRecord.list.length).toEqual(testData.list.length);
  });

  // test that the schema works
  it('should insert record successfully, but exclude the fields that are not defined in the schema', async () => {
    const suggestions = db.collection('suggestions');
    const invalidRecord = new Suggestion(testData1);
    await suggestions.insertOne(invalidRecord);
    const savedInvalidRecord = await suggestions.findOne({ shoeID: 22 });
    expect(savedInvalidRecord._id).toBeDefined();
    expect(savedInvalidRecord.shoeName).toBeUndefined();
    expect(savedInvalidRecord.list[0].color).toBeUndefined();
  });
});

// using testDB
describe('server routes', () => {
  it('should GET /api/suggestions', async () => {
    const response = await request(app).get('/api/suggestions/28');
    expect(response.body.length).toBe(1);
    expect(response.body[0].list.length).toBe(16);
    expect(response.body[0]).toHaveProperty('shoeID');
    expect(response.body[0]).toHaveProperty('list');
    expect(response.statusCode).toBe(200);
  });

  it('should return 404 for incorrect resource', async () => {
    const response = await request(app).get('/api/suggestions/ultraboost-29');
    expect(response.statusCode).toBe(404);
  });
});

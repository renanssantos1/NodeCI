require('../models/User');

const mongoose = require('mongoose');

jest.setTimeout(1000 * 60)

const keys = require('../config/keys');

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

afterAll(async () => {
  await mongoose.disconnect();
});

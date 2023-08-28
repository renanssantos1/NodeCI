const mongoose = require('mongoose');
const keys = require('../../config/keys');

require('../../models/User')

let mongoDB;

mongoose.Promise = global.Promise;

async function initServer() {
  await mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoDB = mongoose;
}

export const getMongoDBInstance = () => mongoDB;
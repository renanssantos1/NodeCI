const mongoose = require('mongoose');
const keys = require('../../config/keys');



let mongoDB;

mongoose.Promise = global.Promise;

async function initServer() {
    require('../../models/User')
  await mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoDB = mongoose;
}

export const getMongoDBInstance = () => mongoDB;
var mongoose = require('mongoose');

const connectToMongo = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/upload3DModels');

  mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo Succesfully');
  });
  mongoose.connection.on('error', error => {
    console.log('error Connecting to DB', error);
  });
};
module.exports = connectToMongo;

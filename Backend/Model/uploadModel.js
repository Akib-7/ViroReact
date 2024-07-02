const mongoose = require('mongoose');

const uploadModelSchema = mongoose.Schema({
  file3D: {type: String},
});
mongoose.models = {};
const uploadModel = mongoose.model('models', uploadModelSchema);
module.exports = uploadModel;

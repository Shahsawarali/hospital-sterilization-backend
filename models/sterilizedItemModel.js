const mongoose = require('mongoose');

const sterilizedItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, default: 'Sterilized' }
});

module.exports = mongoose.model('SterilizedItem', sterilizedItemSchema);

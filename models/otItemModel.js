const mongoose = require('mongoose');

const OTItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },  // Change 'name' to 'itemName'
  quantity: { type: Number, required: true }
});

const OTItem = mongoose.model('OTItem', OTItemSchema);

module.exports = OTItem;

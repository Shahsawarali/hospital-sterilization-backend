const mongoose = require('mongoose');

const counterItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, default: 'Available' }
});

module.exports = mongoose.model('CounterItem', counterItemSchema);

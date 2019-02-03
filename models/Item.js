const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  clientId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  phone: { type: String, required: true },
  ownerName: { type: String, required: true },
  class: { type: String, required: true },
  tmpName: { type: String, required: true },
  appliedNo: { type: String, required: true },
  date: { type: String, required: true },
  refForm: { type: String, required: true },
  statement: { type: String, required: true },
  advance: { type: String, required: true },
  examination: { type: String, required: true },
  file: { type: String, required: true },
  jNo: { type: String, required: true },
  opp: { type: String, required: true },
  goods: { type: String, required: true },
  balance: { type: String, required: true },
});

module.exports = mongoose.model('Item', itemSchema);

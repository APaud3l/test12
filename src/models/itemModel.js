const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  quantityInStock: {
    type: Number,
    default: 0,
    min: 0
  },
  category: {
    type: String,
    default: 'General'
  }
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

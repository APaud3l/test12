const Item = require("../models/itemModel.js");

// @desc   Get all inventory items
// @route  GET /items
const getAllItems = async (req, res) => {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch items.' });
    }
  };
  

// @desc   Create a new item
// @route  POST /items
const createItem = async (req, res) => {
  try {
    const { name, price, quantityInStock, category } = req.body;

    const newItem = await Item.create({
      name,
      price,
      quantityInStock,
      category
    });

    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
    getAllItems,
    createItem
};
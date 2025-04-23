const express = require("express");
const { getAllItems, createItem } = require("../controllers/itemController.js");

const router = express.Router();

router.get('/', getAllItems);
router.post('/', createItem);

module.exports = router;

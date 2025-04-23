const express = require("express");
const itemRoutes = require("./routes/items.js");

const app = express();

// Middleware
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Hello Inventory!');
});

app.use("/items", itemRoutes);

app.get('/health', (req, res) => {
    res.json({ status: 'OK'});
});

module.exports = app;

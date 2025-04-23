const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbName = process.env.npm_package_name;
const mongoURI = process.env.MONGO_URI || `mongodb://127.0.0.1:27017/${dbName}`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log(`✅ Connected to MongoDB: ${mongoURI}`);
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
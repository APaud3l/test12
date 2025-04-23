const app = require("./index.js");
const connectDB = require("./utils/database.js");
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
    await connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
});

require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect to the mongoDb!");
  } catch (error) {
    console.error("MongoDB Error!!!!!!!:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to db");
  } catch (error) {
    console.log("error connecting to db");
    console.log(error);
  }
};

module.exports = db;

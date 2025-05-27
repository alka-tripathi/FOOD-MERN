const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://goFood:goFood1@cluster0.2fmm0ri.mongodb.net/gofoodMERN?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DATABASE CONNECTED");

    const data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    //R--> Read Operartion
    //console.log(" Fetched Data:", data);

  } catch (err) {
    console.error(" Connection error:", err.message);
  }
};

module.exports = mongoDB;

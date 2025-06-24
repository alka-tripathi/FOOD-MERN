const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL =
  'mongodb+srv://goFood:goFood1@cluster0.2fmm0ri.mongodb.net/gofoodMERN?retryWrites=true&w=majority&appName=Cluster0';
// const mongoURL = process.env.URL;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DATABASE CONNECTED');

    const foodItemsCollection = mongoose.connection.db.collection('food_items');
    const foodCategoryCollection =
      mongoose.connection.db.collection('foodCategory');

    const foodItems = await foodItemsCollection.find({}).toArray();
    const foodCategories = await foodCategoryCollection.find({}).toArray();

    global.food_items = foodItems;
    global.foodCategory = foodCategories;
    console.log('Fetched Food Items:', global.food_items);
    console.log('Fetched Categories:', global.foodCategory);

    //     const data = await mongoose.connection.db.collection("food_items").find({}).toArray(async function(){
    //  const foodCategory=await mongoose.connection.db.collection("foodCategory").find({}).toArray();
    //  foodCategory.find({}).toArray(function (err,catdata){
    //   if (err) throw err;
    //   global.food_items=data;
    //   console.log("Fetched Food Items:", global.food_items);
    //   global.foodCategory = catdata;
    //   console.log("Fetched Category:", global.foodCategory);

    //  })
    //     });
    //R--> Read Operartion
    //console.log(" Fetched Data:", data);
    // global.food_items = data;
    // console.log(global.food_items)

    //console.log(" Fetched Category:", foodCategory);
  } catch (err) {
    console.error(' Connection error:', err.message);
  }
};

module.exports = mongoDB;

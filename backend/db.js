const mongoose = require('mongoose');
const mongoURL =
  'mongodb+srv://goFood:goFood1@cluster0.2fmm0ri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


  const mongoDB= async()=>{
    await mongoose.connect(mongoURL).then(()=>{
      console.log("DATABASE CONNECTED");
    })
  }
  module.exports=mongoDB;




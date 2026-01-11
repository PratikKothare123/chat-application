const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect(process.env.MONGO_URI).then(()=>
    console.log("MongoDB Connected")).catch(err=>
      console.log(err));
    
  };
  // console.log("MongoDB Connected");

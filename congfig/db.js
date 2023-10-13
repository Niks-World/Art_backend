const mongoose = require("mongoose");
require("dotenv").config();

const connection= async()=>{
  await mongoose.connect(process.env.mongoDBUrl);

  console.log("connection is done");

}
module.exports = {
    connection 
}
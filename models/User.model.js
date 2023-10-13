const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {

    image: String,
    image2: String,
    image3: String,
    
    name: String,
    series: String,
    size: String,

    Splacedob: String,
    Stitle: String,
    Stechnique: String,
    Syear: String,
    Scentury: String,

    title: String,
    placedob: String,
    technique: String,
    year: String,
    century: String

}
)

const userModel = mongoose.model("user", userSchema);


module.exports = {
    userModel
    
}
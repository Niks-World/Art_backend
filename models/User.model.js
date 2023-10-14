const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    image: { type: String, required: false },
    image2: { type: String, required: false },
    image3: { type: String, required: false },
    name: { type: String, required: false },
    series: { type: String, required: false },
    size: { type: String, required: false },
    Splacedob: { type: String, required: false },
    Stitle: { type: String, required: false },
    Stechnique: { type: String, required: false },
    Syear: { type: String, required: false },
    Scentury: { type: String, required: false },
    title: { type: String, required: false },
    placedob: { type: String, required: false },
    technique: { type: String, required: false },
    year: { type: String, required: false },
    century: { type: String, required: false }
});

const userModel = mongoose.model("user", userSchema);

module.exports = {
    userModel
};

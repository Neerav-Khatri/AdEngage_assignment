const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    title : String,
    description : String,
    keywords : String,
    date : Date,
    imgUrl : String
});

const dataModel = mongoose.Model("images", dataSchema);

module.exports = { dataModel };
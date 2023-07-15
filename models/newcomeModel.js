const mongoose = require("mongoose");

const newcomeSchema = {
    _id: String,
    year: String,
    make: String,
    model: String,
    color: String,
    km: String,
    place: String
}

const Newcome = mongoose.model("newcome", newcomeSchema);

module.exports = Newcome;
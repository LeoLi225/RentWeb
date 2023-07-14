const mongoose = require("mongoose");

const sellSchema = {
    _id: String,
    year: String,
    make: String,
    model: String,
    km: String,
    color: String,
    price: String,
    name: String,
    place: String

}

const Sell = mongoose.model("sell", sellSchema);

module.exports = Sell;
const mongoose = require("mongoose");

const sellSchema = {
    _id: String,
    year: String,
    make: String,
    model: String,
    color: String,
    name: String,
    phone: String

}

const Sell = mongoose.model("sell", sellSchema);

module.exports = Sell;
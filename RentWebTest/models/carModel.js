const mongoose = require("mongoose");

const carsSchema = {
    title: String,
    content: String,
    day: String,
    week: String,
    month: String
}

const Car = mongoose.model("Car", carsSchema);

module.exports = Car;
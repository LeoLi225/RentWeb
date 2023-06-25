const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");

router.route("/create").post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const day = req.body.day;
    const week = req.body.week;
    const month = req.body.month;
    const newCar = new Car({
        title,
        content,
        day,
        week,
        month
    });

    newCar.save();
})

router.route("/cars").get((req, res) => {
    Car.find()
    .then(foundCars => res.json(foundCars))
})


module.exports = router;
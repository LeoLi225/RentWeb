const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");

router.route("/create").post((req, res) => {
    const _id = req.body._id;
    const title = req.body.title;
    const content = req.body.content;
    const day = req.body.day;
    const week = req.body.week;
    const month = req.body.month;
    const videoLink = req.body.videoLink;
    const active = req.body.active;

    const newCar = new Car({
        _id,
        title,
        content,
        day,
        week,
        month,
        videoLink,
        active
    });

    newCar.save();
})

router.route("/cars").get((req, res) => {
    Car.find()
    .then(foundCars => res.json(foundCars))
})

router.route("/cars/:id").delete((req, res) => {
    const carId = req.params.id;
  
    Car.findByIdAndDelete(carId)
      .then(() => res.json({ message: "Car deleted successfully." }))
      .catch((error) => res.status(400).json({ error: "Failed to delete car." }));
  });

  router.route("/cars/:id").put((req, res) => {
    const carId = req.params.id;
    const { active } = req.body;
  
    Car.findByIdAndUpdate(
      carId,
      { active },
      { new: true }
    )
      .then((updatedCar) => {
        if (updatedCar) {
          res.json(updatedCar);
        } else {
          res.status(404).json({ error: "Car not found." });
        }
      })
      .catch((error) => res.status(400).json({ error: "Failed to update car." }));
  });

  router.route("/carEdit/:id").put((req, res) => {
    const carId = req.params.id;
    const updatedCar = req.body;
  
    Car.findByIdAndUpdate(carId, updatedCar)
      .then(() => res.json({ message: "Car updated successfully." }))
      .catch((error) => res.status(400).json({ error: "Failed to update car." }));
  });
  
  

module.exports = router;
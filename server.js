const express = require("express")
const app = express();
const cors= require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://Leo:Lcyang0319.@cluster0.aauqmmu.mongodb.net/carsDB")

// app.use("/", require("./routes/carRoute"));
app.use("/", require("./routes/cloudRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})
const express = require("express");
const routerCloud = express.Router();
const Cloud = require("../models/cloudModel");
const Sell = require("../models/sellModel");

routerCloud.route("/create").post((req, res) => {
    const _id = req.body._id;
    const membership = req.body.membership;
    const vip = req.body.vip;
    const svip = req.body.svip;
    const ssvip = req.body.ssvip;
    const SRank1_name = req.body.SRank1_name;
    const SRank2_name = req.body.SRank2_name;
    const SRank3_name = req.body.SRank3_name;
    const SRank1_avatar = req.body.SRank1_avatar;
    const SRank2_avatar = req.body.SRank2_avatar;
    const SRank3_avatar = req.body.SRank3_avatar;
    const MRank1_name = req.body.MRank1_name;
    const MRank2_name = req.body.MRank2_name;
    const MRank3_name = req.body.MRank3_name;
    const MRank1_avatar = req.body.MRank1_avatar;
    const MRank2_avatar = req.body.MRank2_avatar;
    const MRank3_avatar = req.body.MRank3_avatar;
    const M1 = req.body.M1;
    const M2 = req.body.M2;
    const M3 = req.body.M3;

    const newCloud = new Cloud({
        _id,
        membership,
        vip,
        svip,
        ssvip,
        SRank1_name,
        SRank2_name,
        SRank3_name,
        SRank1_avatar,
        SRank2_avatar,
        SRank3_avatar,
        MRank1_name,
        MRank2_name,
        MRank3_name,
        MRank1_avatar,
        MRank2_avatar,
        MRank3_avatar,
        M1,
        M2,
        M3
    });

    newCloud.save();
})

routerCloud.route("/clouds").get((req, res) => {
    Cloud.find()
        .then(foundClouds => res.json(foundClouds))
})

routerCloud.route("/cloud/:id").delete((req, res) => {
    const cloudId = req.params.id;

    Cloud.findByIdAndDelete(cloudId)
        .then(() => res.json({ message: "Cloud deleted successfully." }))
        .catch((error) => res.status(400).json({ error: "Failed to delete cloud." }));
});


routerCloud.route("/cloudEdit/:id").put((req, res) => {
    const cloudId = req.params.id;
    const updatedCloud = req.body;

    Cloud.findByIdAndUpdate(cloudId, updatedCloud)
        .then(() => res.json({ message: "Car updated successfully." }))
        .catch((error) => res.status(400).json({ error: "Failed to update car." }));
});

routerCloud.route("/sells").post((req, res) => {
    const _id = req.body._id;
    const year = req.body.year;
    const make = req.body.make;
    const model = req.body.model;
    const km = req.body.km;
    const color = req.body.color;
    const price = req.body.price;
    const name = req.body.name;
    const place = req.body.place;


    const newSell = new Sell({
        _id,
        year,
        make,
        model,
        km,
        color,
        price,
        name,
        place
    });

    newSell.save();
})

routerCloud.route("/sells").get((req, res) => {
    Sell.find()
        .then(foundSells => res.json(foundSells))
        .catch((error) => res.status(400).json({ error: "Failed to fetch sells." }));
});

// 删除出售记录
routerCloud.route("/sell/:id").delete((req, res) => {
    const sellId = req.params.id;

    Sell.findByIdAndDelete(sellId)
        .then(() => res.json({ message: "Sell deleted successfully." }))
        .catch((error) => res.status(400).json({ error: "Failed to delete sell." }));
});

// 更新出售记录
routerCloud.route("/sellEdit/:id").put((req, res) => {
    const sellId = req.params.id;
    const updatedSell = req.body;

    Sell.findByIdAndUpdate(sellId, updatedSell)
        .then(() => res.json({ message: "Sell updated successfully." }))
        .catch((error) => res.status(400).json({ error: "Failed to update sell." }));
});



module.exports = routerCloud;
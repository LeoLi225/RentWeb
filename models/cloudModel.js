const mongoose = require("mongoose");

const cloudSchema = {
    _id: String,
    membership: String,
    vip: String,
    svip: String,
    ssvip: String,
    SRank1_name: String,
    SRank2_name: String,
    SRank3_name: String,
    SRank1_avatar: String,
    SRank2_avatar: String,
    SRank3_avatar: String,
    MRank1_name: String,
    MRank2_name: String,
    MRank3_name: String,
    MRank1_avatar: String,
    MRank2_avatar: String,
    MRank3_avatar: String,
    M1: String,
    M2: String,
    M3: String
}

const Cloud = mongoose.model("cloud", cloudSchema);

module.exports = Cloud;
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  _id: String,
  avatarUrl: String,  
  name: String,
  messagehere: String
});

const Message = mongoose.model("message", messageSchema);

module.exports = Message;

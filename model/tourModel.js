const mongoose = require("mongoose");
const tourScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Siz nameni kiritishingiz shart"],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, "Siz numberni kiritishingiz shart"],
  },
});

const Tours = mongoose.model("mamur", tourScheme);

module.exports = Tours;

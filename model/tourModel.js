const mongoose = require("mongoose");
const tourScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Siz nameni kiritishingiz shart"],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, "Siz durationni kiritishingiz shart"],
  },
  ratingsAverage: {
    type: Number,
    required: [true, "Siz  ratingsSizeni kiritishinfgiz kerak"],
  },
});

const Tours = mongoose.model("mamur", tourScheme);

module.exports = Tours;

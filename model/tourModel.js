const mongoose = require("mongoose");
const tourScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Siz nameni kiritishingiz shart"],
    unique: true,
  },
  createAt: {
    select: false, // post qisa boladi lekin get qisa createAtni olib kelmaydi !!!!
    type: Date,
    default: Date.now(),
  },
});

const Tours = mongoose.model("firstCollection", tourScheme);

module.exports = Tours;

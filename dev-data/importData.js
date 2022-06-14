const fs = require("fs");
const mongoose = require("mongoose"); // bitta o boladi
const Tours = require("../model/tourModel");

mongoose
  .connect(
    "mongodb+srv://mamur7191:mamur7191@cluster0.ushcr.mongodb.net/firstDataBase?retryWrites=true&w=majority",
    {}
  )
  .then(() => {
    console.log("Server connection succesful");
  });

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

const addInfo = async () => {
  try {
    const add = await Tours.create(data);
    console.log("Malumotlar eson omon qoshildi");
  } catch (err) {
    console.log(err);
  }
};
const deleteInfo = async () => {
  try {
    const dele1e = await Tours.deleteMany();
    console.log("Hamma malumot ochirildi");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] == "--add") {
  addInfo();
} else if (process.argv[2] == "--delete") {
  deleteInfo();
}

///////////////////////// DataBasega saqlashni yana bir yoli lekin bu sal qiyinroq

// const testTours = new Tours({
//   name: "Mamur",
//   duration: 3,
// });

// testTours.save().then((a) => {
//   console.log(a);
// });

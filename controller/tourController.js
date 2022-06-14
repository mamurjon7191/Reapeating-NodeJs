const fs = require("fs");
const { findByIdAndDelete } = require("../model/tourModel");
const Tours = require("../model/tourModel");

const formatJson = JSON.parse(fs.readFileSync("./dev-data/data.json", "utf-8"));

//jsonni get qilish
const getTours = async (req, res) => {
  try {
    const allTours = await Tours.find();
    res.status(200).json({
      status: "Succes",
      data: allTours,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
//bitta jsonni id si orqali olib kelish
const getTour = async (req, res) => {
  try {
    const tour = await Tours.findById(req.params.id);
    res.status(200).json({
      status: "Succes",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
// jsonni post qilish
const postTours = async (req, res) => {
  try {
    const data1 = await Tours.create(req.body);
    res.status(200).json({
      status: "Succes",
      data: data1,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
// jsonni ochirish
const deleteTours = async (req, res) => {
  await Tours.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "succes",
    data: null, // deleteda userga hech narsa qaytarilmaydi
  });
};
// jsonni updateQilish
const updateTours = async (req, res) => {
  const data = await Tours.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "succes",
    data: data,
  });
};

module.exports = {
  getTours,
  postTours,
  deleteTours,
  getTour,
  updateTours,
};

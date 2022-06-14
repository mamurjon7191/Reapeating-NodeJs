const express = require("express");
const tourController = require("../controller/tourController");

const tourRouter = express.Router();

tourRouter
  .route("/")
  .get(tourController.getTours)
  .post(tourController.postTours);

// tourController.getTours();
tourRouter
  .route("/:id")
  .delete(tourController.deleteTours)
  .get(tourController.getTour)
  .patch(tourController.updateTours);
module.exports = tourRouter;

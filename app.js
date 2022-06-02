const express = require("express");
const fs = require("fs");
const tourRouter = require("./router/tourRouter");

// const formatJson = JSON.parse(fs.readFileSync("./dev-data/data.json", "utf-8"));

const app = express();

app.use(express.json());

app.use("api/v1/tours", tourRouter);

app.listen("8000", "127.0.0.1");

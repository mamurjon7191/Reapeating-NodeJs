const dotenv = require("dotenv");
const mongoose = require("mongoose");

// global ozgaruvchilarni tanishi uchun
dotenv.config({ path: "./config.env" });

const app = require("./app");
const port = process.env.PORT;

const DB = process.env.DATABASE;

mongoose.connect(DB, {}).then(() => {
  console.log("Server connection succesful");
});

app.listen(port, "127.0.0.1");

// console.log(process.env.DATABASE);

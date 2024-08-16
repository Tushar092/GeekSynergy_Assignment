const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();

server.listen(process.env.PORT, async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log(`Server running at port ${process.env.port}`);
    console.log("Connected to the DB!!");
  } catch (error) {
    console.log(error.message);
  }
});

const mongoose = require("mongoose");
const config = require("../config");
const { Video } = require("./Video");

const dbConnection = mongoose.connect(
  config.storageConfig.db,
  { useCreateIndex: true, useNewUrlParser: true },
  err => {
    !err
      ? console.log("DB Connection SUCCESFUL")
      : console.log("DB Connection FAIL");
  }
);

module.exports = {
    Video,
    dbConnection
}
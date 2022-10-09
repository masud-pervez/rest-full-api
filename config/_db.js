const mongoose = require("mongoose");
const connectDB = () => {
  mongoose.connect(process.env.NODE_ENV, () => {
    console.log("Connection successfull".brightBlue.underline.bold);

  });
};

module.exports = connectDB;

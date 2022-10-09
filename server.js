const express = require("express");
const dotenv = require("dotenv");
// const morgan = require("morgan");
const connectDB = require("./config/_db");
const colors = require("colors");

//load env vars
dotenv.config({ path: "./config/config.env" });

// connect to mongoDB
connectDB();

//routes files
const bootcamps = require("./routes/bootcamps");

// Mount router
const app = express();
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

const server = app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// handle unhandle promise  rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

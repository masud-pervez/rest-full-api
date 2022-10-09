const express = require("express");
const dotenv = require("dotenv");

//load env vars
dotenv.config({ path: "./condig/convig.env" });

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);

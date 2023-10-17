const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./Routes/routes.js");
const cors = require("cors");

const bcrypt = require("bcrypt");

//configuring dotenv
dotenv.config();

// creating an app instance

const app = express();

// defining port instance
const Port = process.env.Port || 3001;

//for security reasons but should i really be putting this here?
const CONNECTION = process.env.CONNECTION_URI;

//middlewares

app.use(express.json());
app.use(cors());

//Router middleware

app.use("/api/v1", routes);

//listening to server & connecting to db
const start = async () => {
  try {
    await mongoose.connect(CONNECTION);
    app.listen(Port, () => {
      console.log(`server is running on ${Port}`);
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();

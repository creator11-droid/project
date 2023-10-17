//calling express
const express = require("express");
// importing route controllers by object destructuring

const {
  getItem,
  postItem,
  getItems,
  updateItem,
  deleteItem,
  logIn,
  register,
} = require("../controllers/controller");

// creating a route instance
const router = express.Router();

router
  .post("/register", register)
  .post("/log-in", logIn)
  .get("/", getItems)
  .post("/:id", postItem)
  .patch("/:id", updateItem)
  .delete("/:id", deleteItem)
  .get("/:id", getItem);

module.exports = router;

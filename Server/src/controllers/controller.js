const bcrypt = require("bcrypt");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const getItems = (req, res) => {
  res.json("get all item");
};
const getItem = (req, res) => {
  res.json("get item");
};

const postItem = (req, res) => {
  res.json("post single item");
};

const updateItem = (req, res) => {
  res.json("update item");
};

const deleteItem = (req, res) => {
  res.json("delete item");
};

const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userName,
      password: hashPassword,
      email,
    });
    await newUser.save();
    res.status(201).json({ message: "new user created successfully" });
  } catch (error) {
    res.status(500).json({ message: "error signing up" });
  }
};
const logIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      res.status(401).json({ message: "invalid credentials" });
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      res.status(401).json({ message: "invalid password" });
    }
    const token = jwt.sign({ userId: User._id }, process.env.SECRET_KEY, {
      expiresIn: "1hr",
    });
    res.json("login successful");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getItem,
  getItems,
  postItem,
  updateItem,
  deleteItem,
  logIn,
  register,
};

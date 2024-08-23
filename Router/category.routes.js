const express = require("express");
const router = express.Router();
const {getAllCategory} = require("../Controllers/Category.controllers");
router
  .get("/getcategory", getAllCategory)
  

exports.router = router;

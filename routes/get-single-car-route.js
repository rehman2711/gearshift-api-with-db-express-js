const express = require("express");
const router = express.Router();

const {
  getSingleCarsController,
} = require("../controllers/get-single-car-controller");

router.get("/single-car/:id", getSingleCarsController);

module.exports = router;

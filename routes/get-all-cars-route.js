const express = require("express");
const router = express.Router();

const {
  getAllCarsController,
} = require("../controllers/get-all-cars-controller");

router.get("/all-cars", getAllCarsController);

module.exports = router;

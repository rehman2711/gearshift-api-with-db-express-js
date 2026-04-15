const express = require("express");
const router = express.Router();

const {
  getAllBookingsController,
} = require("../controllers/get-all-bookings-controller");
router.get("/all-non-approved-bookings", getAllBookingsController);

module.exports = router;

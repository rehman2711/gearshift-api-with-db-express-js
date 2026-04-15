const express = require("express");
const router = express.Router();

const {getApprovedBookingsController} = require("../controllers/get-approved-bookings-controller");

router.get("/all-approved-bookings", getApprovedBookingsController);

module.exports = router;

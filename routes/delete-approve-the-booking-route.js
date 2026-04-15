const express = require("express");
const router = express.Router();

const {deleteApproveTheBookingController} = require("../controllers/delete-approve-the-booking-controller");

router.delete("/approve-the-booking/:id", deleteApproveTheBookingController);

module.exports = router;

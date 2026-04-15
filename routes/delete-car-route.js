const express = require("express");
const router = express.Router();

const { deleteCarController } = require("../controllers/delete-car-controller");

router.delete("/delete-car/:id", deleteCarController);

module.exports = router;

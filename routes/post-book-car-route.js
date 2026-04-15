const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");

const {
  postBookCarController,
} = require("../controllers/post-book-car-controller");

router.post("/book-car", upload.single("customerImage"), postBookCarController);

module.exports = router;

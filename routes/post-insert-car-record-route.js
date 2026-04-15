const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");

const {
  insertCarRecordController,
} = require("../controllers/post-insert-car-record-controller");

router.post(
  "/insert-car",
  upload.fields([
    { name: "carImageMain", maxCount: 1 },
    { name: "carImageSub1", maxCount: 1 },
    { name: "carImageSub2", maxCount: 1 },
    { name: "carImageSub3", maxCount: 1 },
  ]),
  insertCarRecordController,
);

module.exports = router;

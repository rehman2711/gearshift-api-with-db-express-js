const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");

const {
  editCarController,
} = require("../controllers/patch-edit-car-controller");

router.patch(
  "/edit-car/:id",
  upload.fields([
    { name: "carImageMain", maxCount: 1 },
    { name: "carImageSub1", maxCount: 1 },
    { name: "carImageSub2", maxCount: 1 },
    { name: "carImageSub3", maxCount: 1 },
  ]),
  editCarController,
);

module.exports = router;

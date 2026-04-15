const multerS3 = require("multer-s3");
const s3 = require("./aws-config");
const multer = require("multer");


const storage = multerS3({
  s3,
  bucket: process.env.BUCKET,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;

    // Store inside folder: gearshift-images/
    cb(null, "gearshift-images/" + uniqueName);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

const {
  insertCarRecordService,
} = require("../services/post-insert-car-record-service");

const insertCarRecordController = async (req, res) => {
  try {
    const {
      carName,
      carDescription,
      carSlogan,
      carCurrency,
      carRent,
      carManufactureYear,
      carBrandName,
      carModelName,
      carFuelType,
      carMileage,
      carGearSystem,
      carSeatingCapacity,
      carStorageCapacity,
      carStatus,
      carAvailableDate,
    } = req.body;

    console.log(req.files);

    const main = req.files.carImageMain[0].key;
    const sub1 = req.files.carImageSub1[0].key;
    const sub2 = req.files.carImageSub2[0].key;
    const sub3 = req.files.carImageSub3[0].key;

    const insertCarRecordResponse = await insertCarRecordService(
      carName,
      carDescription,
      carSlogan,
      carCurrency,
      carRent,
      carManufactureYear,
      carBrandName,
      carModelName,
      carFuelType,
      carMileage,
      carGearSystem,
      carSeatingCapacity,
      carStorageCapacity,
      carStatus,
      carAvailableDate,
      main,
      sub1,
      sub2,
      sub3,
    );

    console.log([insertCarRecordResponse]);
    res.status(200).json({ message: "Inserted Data Successfully" });
  } catch (error) {
    console.log("Error Inserting Data", error);
  }
};

module.exports = {
  insertCarRecordController,
};

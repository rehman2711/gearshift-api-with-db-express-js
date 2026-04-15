const { patchEditCarService } = require("../services/patch-edit-car-service");

const editCarController = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("BODY:", req.body); // <-- MUST show fields
    console.log("FILES:", req.files);

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

    const files = req.files ?? {};

    console.log(req.file);

    const { carImageMain, carImageSub1, carImageSub2, carImageSub3 } = files;

    const editCarResponse = await patchEditCarService(
      id,
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
      carImageMain,
      carImageSub1,
      carImageSub2,
      carImageSub3,
    );
    console.log(editCarResponse);
    res.status(200).json({ message: "Record edited successfully" });
  } catch (error) {
    console.log(`Error occured while editing car data ${error}`);
  }
};

module.exports = {
  editCarController,
};

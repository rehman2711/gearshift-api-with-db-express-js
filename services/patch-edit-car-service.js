const connection = require("../config/connection");
require("dotenv").config();

const patchEditCarService = async (
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
) => {
  if (carImageMain) {
    var editCarMainImage = `UPDATE ${process.env.DB_TABLE_CAR} set carImageMain="${carImageMain[0].key}"  WHERE id = ?`;
    await connection.execute(editCarMainImage, [id]);
  }

  if (carImageSub1) {
    var editCarImageSub1 = `UPDATE ${process.env.DB_TABLE_CAR} set carImageSub1="${carImageSub1[0].key}"  WHERE id = ?`;
    await connection.execute(editCarImageSub1, [id]);
  }

  if (carImageSub2) {
    var editCarImageSub2 = `UPDATE ${process.env.DB_TABLE_CAR} set carImageSub2="${carImageSub2[0].key}"  WHERE id = ?`;
    await connection.execute(editCarImageSub2, [id]);
  }

  if (carImageSub3) {
    var editCarImageSub3 = `UPDATE ${process.env.DB_TABLE_CAR} set carImageSub3="${carImageSub3[0].key}"  WHERE id = ?`;
    await connection.execute(editCarImageSub3, [id]);
  }

  const editCarQuery = `
  UPDATE ${process.env.DB_TABLE_CAR} SET 
    carName = ?, 
    carDescription = ?, 
    carSlogan = ?, 
    carCurrency = ?, 
    carRent = ?, 
    carManufactureYear = ?, 
    carBrandName = ?, 
    carModelName = ?, 
    carFuelType = ?, 
    carMileage = ?, 
    carGearSystem = ?, 
    carSeatingCapacity = ?, 
    carStorageCapacity = ?, 
    carStatus = ?, 
    carAvailableDate = ?
  WHERE id = ?
`;

  const editCarResponse = await connection.execute(editCarQuery, [
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
    id,
  ]);
};

module.exports = {
  patchEditCarService,
};

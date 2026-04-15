const connection = require("../config/connection");
require("dotenv").config();

const insertCarRecordService = async (
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
) => {
  const carInsertQuery = `INSERT INTO ${process.env.DB_TABLE_CAR} (	
    carName	,
		carDescription	,
	  carSlogan	,
	  carCurrency	,
		carRent,
		carManufactureYear	,
		carBrandName	,
		carModelName,
		carFuelType	,
		carMileage,
		carGearSystem	,
		carSeatingCapacity	,
		carStorageCapacity	,
		carStatus	,
		carAvailableDate,
  	carImageMain,
		carImageSub1	,
	  carImageSub2	,
	  carImageSub3) 
    VALUES ( 
      "${carName}",
      "${carDescription}",
      "${carSlogan}",
      "${carCurrency}",
      "${carRent}",
      "${carManufactureYear}",
      "${carBrandName}",
      "${carModelName}",
      "${carFuelType}",
      "${carMileage}",
      "${carGearSystem}",
      "${carSeatingCapacity}",
      "${carStorageCapacity}",
      "${carStatus}",
      "${carAvailableDate}",
      "${main}",
      "${sub1}",
      "${sub2}",
      "${sub3}"
    )`;

  const insertResponse = await connection.execute(carInsertQuery);
};

module.exports = { insertCarRecordService };

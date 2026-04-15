const connection = require("../config/connection");
require("dotenv").config();

const getAllCarsService = async () => {
  const SelectQuery = `SELECT * FROM ${process.env.DB_TABLE_CAR}`;

  const [getAllCarsResponse] = await connection.execute(SelectQuery);
  return getAllCarsResponse;
};

module.exports = {
  getAllCarsService,
};

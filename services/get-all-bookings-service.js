const connection = require("../config/connection");
require("dotenv").config();

const getAllBookingsService = async () => {
  const fetchBookedCarsQuery = `SELECT * FROM ${process.env.DB_TABLE_BOOKING}`;

  const [bookedCarsQueryResponse] =
    await connection.execute(fetchBookedCarsQuery);

  return bookedCarsQueryResponse;
};

module.exports = {
  getAllBookingsService,
};

const connection = require("../config/connection");
require("dotenv").config();

const getApprovedBookingsService = async () => {
  fetchCompletedBookingsQuery = `SELECT * FROM ${process.env.DB_TABLE_APPROVED_BOOKING}`;

  const [completedBookingsQueryResponse] = await connection.execute(
    fetchCompletedBookingsQuery,
  );

  return completedBookingsQueryResponse;
};

module.exports = { getApprovedBookingsService };

const connection = require("../config/connection");
require("dotenv").config();

const getSingleCarService = async (id) => {
  const singleCarFetchQuery = `SELECT * FROM ${process.env.DB_TABLE_CAR} WHERE id = ? `;
  const [getSingleCarResponse] = await connection.execute(singleCarFetchQuery, [
    id,
  ]);
  return getSingleCarResponse;
};

module.exports = {
  getSingleCarService,
};

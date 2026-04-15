const connection = require("../config/connection");
require("dotenv").config();

const deleteCarService = async (id) => {
  const deleteCarQuery = `DELETE FROM ${process.env.DB_TABLE_CAR} WHERE id = ?`;

  const [deleteResponse] = await connection.execute(deleteCarQuery, [id]);

  return deleteResponse;
};

module.exports = { deleteCarService };

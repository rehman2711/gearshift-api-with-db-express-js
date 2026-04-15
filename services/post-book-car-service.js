const connection = require("../config/connection");
require("dotenv").config();

const postBookCarService = async (
  customerName,
  customerMobile,
  customerEmail,
  customerGender,
  customerAddress,
  customerPAN,
  customerChoosenCar,
  customerChoosenCarFrom,
  customerChoosenCarTo,
  customerImage,
) => {
  const bookingWithImageQuery = `INSERT INTO ${process.env.DB_TABLE_BOOKING} (
      customerName,
      customerMobile,
      customerEmail,
      customerGender,
      customerAddress,
      customerPAN,
      customerChoosenCar,
      customerChoosenCarFrom,
      customerChoosenCarTo,
      customerImage ) 
      VALUES (
      "${customerName}",
      "${customerMobile}",
      "${customerEmail}",
      "${customerGender}",
      "${customerAddress}",
      "${customerPAN}",
      "${customerChoosenCar}",
      "${customerChoosenCarFrom}",
      "${customerChoosenCarTo}",
      "${customerImage}"
      ) `;

  const bookingResponse = await connection.execute(bookingWithImageQuery);
};

module.exports = { postBookCarService };

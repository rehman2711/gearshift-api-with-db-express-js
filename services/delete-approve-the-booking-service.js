const connection = require("../config/connection");
require("dotenv").config();

const deleteApproveTheBookingService = async (id) => {
  // checking connection
  // using
  // releasing
  const conn = await connection.getConnection();

  const transferRecordToAnotherTableQuery = `
    INSERT INTO ${process.env.DB_TABLE_APPROVED_BOOKING} (
      customerName,
      customerMobile,
      customerEmail,
      customerGender,
      customerAddress,
      customerPAN,
      customerChoosenCar,
      customerChoosenCarFrom,
      customerChoosenCarTo,
      customerImage
    )
    SELECT
      customerName,
      customerMobile,
      customerEmail,
      customerGender,
      customerAddress,
      customerPAN,
      customerChoosenCar,
      customerChoosenCarFrom,
      customerChoosenCarTo,
      customerImage
    FROM ${process.env.DB_TABLE_BOOKING}
    WHERE id = ?
  `;

  const deleteRecordFromExistingTableQuery = `
    DELETE FROM ${process.env.DB_TABLE_BOOKING}
    WHERE id = ?
  `;

  try {
    await conn.beginTransaction();

    // ransfering record
    const [transferRecordsResponse] = await conn.execute(
      transferRecordToAnotherTableQuery,
      [id],
    );

    // Checking record exists
    if (transferRecordsResponse.affectedRows === 0) {
      throw new Error("Booking not found");
    }

    // Delete original record
    const [deleteRecordsResponse] = await conn.execute(
      deleteRecordFromExistingTableQuery,
      [id],
    );

    await conn.commit();

    return {
      transfer: transferRecordsResponse,
      delete: deleteRecordsResponse,
    };
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
};

module.exports = { deleteApproveTheBookingService };

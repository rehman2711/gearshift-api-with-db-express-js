const {
  getAllBookingsService,
} = require("../services/get-all-bookings-service");

const getAllBookingsController = async (req, res) => {
  try {
    const getAllBookingsResponse = await getAllBookingsService();

    console.log(getAllBookingsResponse);
    // res.send(getAllBookingsResponse);
    res.status(200).json(getAllBookingsResponse);
  } catch (errorr) {
    console.log("Error While fetching Bookings" + errorr);
  }
};

module.exports = { getAllBookingsController };

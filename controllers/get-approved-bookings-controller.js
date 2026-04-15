const {
  getApprovedBookingsService,
} = require("../services/get-approved-bookings-service");

const getApprovedBookingsController = async (req, res) => {
  try {
    const getApprovedBookingsResponse = await getApprovedBookingsService();

    console.log(getApprovedBookingsResponse);

    // res.send(completedBookingsQueryResponse?.[0]);
    res.status(200).json(getApprovedBookingsResponse);
  } catch (errorr) {
    console.log("Error While fetching Completed Bookings" + errorr);
  }
};

module.exports={getApprovedBookingsController}
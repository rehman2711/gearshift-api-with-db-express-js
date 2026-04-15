const {
  deleteApproveTheBookingService,
} = require("../services/delete-approve-the-booking-service");

const deleteApproveTheBookingController = async (req, res) => {
  try {
    const { id } = req.params;
    //finding bug fix
    // console.log("API HIT", req.params);

    const numericId = Number(id);

    if (!numericId || !Number.isInteger(numericId)) {
      return res.status(400).json({
        message: "Valid booking ID is required",
      });
    }

    const deleteApproveTheBookingResponse =
      await deleteApproveTheBookingService(numericId);

    return res.status(200).json({
      message: "Booking approved and moved successfully",
    });
  } catch (error) {
    console.error("Error while approving booking:", error.message);

    if (error.message === "Booking not found") {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { deleteApproveTheBookingController };

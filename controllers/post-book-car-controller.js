const { postBookCarService } = require("../services/post-book-car-service");

const postBookCarController = async (req, res) => {
  try {
    const {
      customerName,
      customerMobile,
      customerEmail,
      customerGender,
      customerAddress,
      customerPAN,
      customerChoosenCar,
      customerChoosenCarFrom,
      customerChoosenCarTo,
    } = req.body;

    if (
      !customerName ||
      !customerMobile ||
      !customerEmail ||
      !customerChoosenCar
    ) {
      return res.status(400).json({
        message: "Required fields are missing",
      });
    }

    const customerImage = req.file ? req.file.key : null;

    const postBookCarResponse = await postBookCarService(
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
    );

    return res.status(200).json({
      message: "Booking successful",
    });

  } catch (error) {
    console.error("Error while making booking:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  postBookCarController,
};
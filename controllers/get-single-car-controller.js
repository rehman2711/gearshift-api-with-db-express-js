const { getSingleCarService } = require("../services/get-single-car-service");

const getSingleCarsController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Car ID is required" });
    }

    const fetchedSingleCar = await getSingleCarService(id);

    if (!fetchedSingleCar.length) {
      return res.status(400).json({ message: "Car not found" });
    }

    return res.status(200).json(fetchedSingleCar[0]);
  } catch (error) {
    console.log(`Error occured while fetching single car data ${error}`);
  }
};

module.exports = {
  getSingleCarsController,
};

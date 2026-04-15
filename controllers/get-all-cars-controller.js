const { getAllCarsService } = require("../services/get-all-cars-service");

const getAllCarsController = async (req, res) => {
  try {
    // output format
    // [
    //   [
    //     {
    //       id: 1,
    //     },
    //     {
    //       id: 2,
    //     },
    //   ],
    // ];

    // in services we done const [row]  -> one outer array extract
    // remain only
    //   [
    //     {
    //       id: 1,
    //     },
    //     {
    //       id: 2,
    //     },
    //   ],

    const fetchedAllCars = await getAllCarsService();
    console.log(fetchedAllCars);
    res.send(fetchedAllCars);
  } catch (error) {
    console.log("Error while fetching all cars" + error);
  }
};

module.exports = {
  getAllCarsController,
};

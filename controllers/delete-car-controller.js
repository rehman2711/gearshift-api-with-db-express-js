const {deleteCarService} = require("../services/delete-car-service");

const deleteCarController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        message: "Valid car ID is required",
      });
    }

    const deleteCarResponse = await deleteCarService(id);

    if (deleteCarResponse.affectedRows === 0) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    return res.status(200).json({
      message: "Deleted successfully",
    });

  } catch (error) {
    console.error("Error deleting car:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  deleteCarController,
};
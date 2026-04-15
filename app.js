// ============================  IMPORTS  ==================================

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { swaggerUi, swaggerSpec } = require("./swagger");
const allowedOrigins = require("./config/cors-config");
const limiter = require("./config/rate-limiter-config");

// ===================================================

const app = express();

// ============================  MIDDLEWARES  ================================


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use("/uploads", express.static("my-uploads"));

// setting cors policy
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow server-to-server or Postman

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

// Rate Limiting Middleware

app.use(limiter);

// Swagger UI route
app.use("/gearshift-api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// =========================================================================

// ============================   HOME PAGE  ===============================

app.get("/", (req, res) => {
  res.render("home.ejs");
});

// ============================  API  ===========================================

// 1 - GET all cars
const getAllCars = require("./routes/get-all-cars-route");

app.use("/api/v1", getAllCars);

// 2 - GET single car

const getSingleCar = require("./routes/get-single-car-route");

app.use("/api/v1", getSingleCar);

// 3 POST - insert car record

const postInserCarRecord = require("./routes/post-insert-car-record-route");

app.use("/api/v1", postInserCarRecord);

// 4 PATCH  - Edit Car Record

const patchEditCarRecord = require("./routes/patch-edit-car-route");

app.use("/api/v1", patchEditCarRecord);

// 5 DELETE - Delete Car Record

const deleteCar = require("./routes/delete-car-route");

app.use("/api/v1", deleteCar);

// 6 POST - Book Car

const bookCar = require("./routes/post-book-car-route");

app.use("/api/v1", bookCar);

// 7 GET - Show Booked Cars

const getAllBookings = require("./routes/get-all-bookings-route");

app.use("/api/v1", getAllBookings);

// 8 GET - Show Approved Bookings

const getApprovedBookings = require("./routes/get-approved-bookings-route");

app.use("/api/v1", getApprovedBookings);

// 9 DELETE -Show Approve Booking

const approveTheBooking = require("./routes/delete-approve-the-booking-route");

app.use("/api/v1", approveTheBooking);

// =============================================================================================

module.exports = app;

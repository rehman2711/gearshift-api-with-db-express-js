// =============================================================================

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Returns hello message
 *     tags: [General]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello from Express API!
 */
// =============================================================================

// ============================== SELECT ROUTE =================================

/**
 * @swagger
 * /api/v1/all-cars:
 *   get:
 *     summary: Get all cars
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: Returns all cars
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
// =============================================================================

// =============================================================================

/**
 * @swagger
 * /api/v1/single-car/{idd}:
 *   get:
 *     summary: Get single car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: idd
 *         schema:
 *           type: integer
 *         required: true
 *         description: Car ID
 *     responses:
 *       200:
 *         description: Single car data
 */

// =============================================================================

// =========================  INSERT DATA ROUTE  ================================

/**
 * @swagger
 * /api/v1/insert-car:
 *   post:
 *     summary: Insert a new car (with images)
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               carName:
 *                 type: string
 *               carDescription:
 *                 type: string
 *               carSlogan:
 *                 type: string
 *               carCurrency:
 *                 type: string
 *               carRent:
 *                 type: string
 *               carManufactureYear:
 *                 type: string
 *               carBrandName:
 *                 type: string
 *               carModelName:
 *                 type: string
 *               carFuelType:
 *                 type: string
 *               carMileage:
 *                 type: string
 *               carGearSystem:
 *                 type: string
 *               carSeatingCapacity:
 *                 type: string
 *               carStorageCapacity:
 *                 type: string
 *               carStatus:
 *                 type: string
 *               carAvailableDate:
 *                 type: string
 *               carImageMain:
 *                 type: string
 *                 format: binary
 *               carImageSub1:
 *                 type: string
 *                 format: binary
 *               carImageSub2:
 *                 type: string
 *                 format: binary
 *               carImageSub3:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Car inserted successfully
 */

// =============================================================================

// ================================ EDIT CAR DATA ==============================

/**
 * @swagger
 * /api/v1/edit-car/{id}:
 *   patch:
 *     summary: Edit existing car data
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Car ID
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: Car updated successfully
 */

// =============================================================================

// ===========================   DELETE ROUTE  =================================

/**
 * @swagger
 * /api/v1/delete-car/{id}:
 *   delete:
 *     summary: Delete car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Car ID
 *     responses:
 *       200:
 *         description: Car deleted successfully
 */

// =============================================================================

// =============================   BOOKINGS POST  ==============================

/**
 * @swagger
 * /api/v1/book-car:
 *   post:
 *     summary: Create a new car booking with customer details and uploaded image
 *     tags: [Bookings]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               customerName:
 *                 type: string
 *               customerMobile:
 *                 type: string
 *               customerEmail:
 *                 type: string
 *               customerGender:
 *                 type: string
 *               customerAddress:
 *                 type: string
 *               customerPAN:
 *                 type: string
 *               customerChoosenCar:
 *                 type: string
 *               customerChoosenCarFrom:
 *                 type: string
 *                 format: date
 *               customerChoosenCarTo:
 *                 type: string
 *                 format: date
 *               customerImage:
 *                 type: string
 *                 format: binary
 *             required:
 *               - customerName
 *               - customerMobile
 *               - customerEmail
 *               - customerGender
 *               - customerAddress
 *               - customerPAN
 *               - customerChoosenCar
 *               - customerChoosenCarFrom
 *               - customerChoosenCarTo
 *               - customerImage
 *     responses:
 *       200:
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Booking Successfully
 *       500:
 *         description: Error while creating booking
 *         content:
 *           application/json:
 *             example:
 *               error: Error while making booking
 */
// =============================================================================

// ========================   ALL BOOKINGS   ===================================

/**
 * @swagger
 * /api/v1/book_car:
 *   get:
 *     summary: Fetch all active car bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: List of active car bookings
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 customerName: John Doe
 *                 customerMobile: 9876543210
 *                 customerEmail: john@example.com
 *                 customerGender: Male
 *                 customerAddress: USA
 *                 customerPAN: ABCDE1234F
 *                 customerChoosenCar: BMW X5
 *                 customerChoosenCarFrom: "2025-01-05"
 *                 customerChoosenCarTo: "2025-01-10"
 *                 customerImage: uploaded-image-key.jpg
 *       500:
 *         description: Error while fetching bookings
 *         content:
 *           application/json:
 *             example:
 *               error: Error While fetching Bookings
 */

// =========================================================================

// ======================== DELETE BOOKINGS ( ANOTHER TABLE SHIFT) ==========

/**
 * @swagger
 * /api/v1/delete-booking/{delete_id}:
 *   delete:
 *     summary: Move booking to completed table and delete from active bookings
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: delete_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID to move and delete
 *     responses:
 *       200:
 *         description: Booking record moved to bookings_completed and deleted from bookings
 *         content:
 *           application/json:
 *             example:
 *               message: Record Moved To Bookings Completed
 *       404:
 *         description: Booking record not found
 *         content:
 *           application/json:
 *             example:
 *               error: Booking record not found
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               error: Error while deleting booking
 */

// ==========================================================================

// =============== BOOKINGS DELETE AREA ( COMPLETED BOOKINGS ) ==============
// STORE THE DELETED ONE IN THIS API

/**
 * @swagger
 * /api/v1/bookings_completed:
 *   get:
 *     summary: Fetch all completed bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: List of completed bookings
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 customerName: John Doe
 *                 customerMobile: 9876543210
 *                 customerEmail: john@example.com
 *                 customerGender: Male
 *                 customerAddress: USA
 *                 customerPAN: ABCDE1234F
 *                 customerChoosenCar: Tesla Model X
 *                 customerChoosenCarFrom: "2025-01-01"
 *                 customerChoosenCarTo: "2025-01-05"
 *                 customerImage: some-image-url.jpg
 *       500:
 *         description: Error while fetching completed bookings
 *         content:
 *           application/json:
 *             example:
 *               error: Error while fetching completed bookings
 */

// =============================================================================

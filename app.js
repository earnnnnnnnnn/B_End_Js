require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// parse incoming requests
app.use(express.json());

// Import Routes
const userRoutes = require('./routes/userRoutes');
const cameraRoutes = require('./routes/cameraRoutes');
const rentalRoutes = require('./routes/rentalRoutes');
const returnRoutes = require('./routes/returnRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

// Use Routes
app.use('/users', userRoutes);
app.use('/camera', cameraRoutes);
app.use('/rental', rentalRoutes);
app.use('/return', returnRoutes);
app.use('/payment', paymentRoutes);
app.use('/reservation', reservationRoutes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// controllers/reservationController.js

const Reservation = require('../models/reservationModel');

// Get all Reservations
exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.json(reservations);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching reservations', error: err });
    }
};

// Get a Reservation by ID
exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
        res.json(reservation);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching reservation', error: err });
    }
};

// Add a new Reservation
exports.createReservation = async (req, res) => {
    try {
        const newReservation = await Reservation.create(req.body);
        res.status(201).json(newReservation);
    } catch (err) {
        res.status(500).json({ message: 'Error creating reservation', error: err });
    }
};

// Update a Reservation by ID
exports.updateReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (!reservation) return res.status(404).json({ message: 'Reservation not found' });

        const updatedReservation = await reservation.update(req.body);
        res.json(updatedReservation);
    } catch (err) {
        res.status(500).json({ message: 'Error updating reservation', error: err });
    }
};

// Delete a Reservation by ID
exports.deleteReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (!reservation) return res.status(404).json({ message: 'Reservation not found' });

        await reservation.destroy();
        res.json({ message: 'Reservation deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting reservation', error: err });
    }
};

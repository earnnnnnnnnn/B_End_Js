// controllers/rentalController.js

const Rental = require('../models/rentalModel');

// Get all Rentals
exports.getAllRentals = async (req, res) => {
    try {
        const rentals = await Rental.findAll();
        res.json(rentals);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching rentals', error: err });
    }
};

// Get a Rental by ID
exports.getRentalById = async (req, res) => {
    try {
        const rental = await Rental.findByPk(req.params.id);
        if (!rental) return res.status(404).json({ message: 'Rental not found' });
        res.json(rental);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching rental', error: err });
    }
};

// Add a new Rental
exports.createRental = async (req, res) => {
    try {
        const newRental = await Rental.create(req.body);
        res.status(201).json(newRental);
    } catch (err) {
        res.status(500).json({ message: 'Error creating rental', error: err });
    }
};

// Update a Rental by ID
exports.updateRental = async (req, res) => {
    try {
        const rental = await Rental.findByPk(req.params.id);
        if (!rental) return res.status(404).json({ message: 'Rental not found' });
        
        const updatedRental = await rental.update(req.body);
        res.json(updatedRental);
    } catch (err) {
        res.status(500).json({ message: 'Error updating rental', error: err });
    }
};

// Delete a Rental by ID
exports.deleteRental = async (req, res) => {
    try {
        const rental = await Rental.findByPk(req.params.id);
        if (!rental) return res.status(404).json({ message: 'Rental not found' });

        await rental.destroy();
        res.json({ message: 'Rental deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting rental', error: err });
    }
};

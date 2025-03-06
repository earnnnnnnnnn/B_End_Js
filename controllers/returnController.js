// controllers/returnController.js

const Return = require('../models/returnModel');

// Get all Returns
exports.getAllReturns = async (req, res) => {
    try {
        const returns = await Return.findAll();
        res.json(returns);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching returns', error: err });
    }
};

// Get a Return by ID
exports.getReturnById = async (req, res) => {
    try {
        const returnItem = await Return.findByPk(req.params.id);
        if (!returnItem) return res.status(404).json({ message: 'Return not found' });
        res.json(returnItem);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching return', error: err });
    }
};

// Add a new Return
exports.createReturn = async (req, res) => {
    try {
        const newReturn = await Return.create(req.body);
        res.status(201).json(newReturn);
    } catch (err) {
        res.status(500).json({ message: 'Error creating return', error: err });
    }
};

// Update a Return by ID
exports.updateReturn = async (req, res) => {
    try {
        const returnItem = await Return.findByPk(req.params.id);
        if (!returnItem) return res.status(404).json({ message: 'Return not found' });

        const updatedReturn = await returnItem.update(req.body);
        res.json(updatedReturn);
    } catch (err) {
        res.status(500).json({ message: 'Error updating return', error: err });
    }
};

// Delete a Return by ID
exports.deleteReturn = async (req, res) => {
    try {
        const returnItem = await Return.findByPk(req.params.id);
        if (!returnItem) return res.status(404).json({ message: 'Return not found' });

        await returnItem.destroy();
        res.json({ message: 'Return deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting return', error: err });
    }
};

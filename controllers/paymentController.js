// controllers/paymentController.js

const Payment = require('../models/paymentModel');

// Get all Payments
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.json(payments);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching payments', error: err });
    }
};

// Get a Payment by ID
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        res.json(payment);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching payment', error: err });
    }
};

// Add a new Payment
exports.createPayment = async (req, res) => {
    try {
        const newPayment = await Payment.create(req.body);
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(500).json({ message: 'Error creating payment', error: err });
    }
};

// Update a Payment by ID
exports.updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        
        const updatedPayment = await payment.update(req.body);
        res.json(updatedPayment);
    } catch (err) {
        res.status(500).json({ message: 'Error updating payment', error: err });
    }
};

// Delete a Payment by ID
exports.deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) return res.status(404).json({ message: 'Payment not found' });

        await payment.destroy();
        res.json({ message: 'Payment deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting payment', error: err });
    }
};

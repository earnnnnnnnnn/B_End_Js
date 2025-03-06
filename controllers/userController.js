const { Users } = require('../models/userModel');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id);
        if (!user) return res.status(404).send();
        res.json(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Create new user
exports.createUser = async (req, res) => {
    try {
        const user = await Users.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id);
        if (!user) return res.status(404).send();
        await user.update(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id);
        if (!user) return res.status(404).send();
        await user.destroy();
        res.json(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

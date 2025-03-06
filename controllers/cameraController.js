// cameraController.js

const Camera = require('../models/cameraModel');

// Get all cameras
exports.getAllCameras = async (req, res) => {
    try {
        const cameras = await Camera.findAll();
        res.json(cameras);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching cameras', error: err });
    }
};

// Get a camera by ID
exports.getCameraById = async (req, res) => {
    try {
        const camera = await Camera.findByPk(req.params.id);
        if (!camera) return res.status(404).json({ message: 'Camera not found' });
        res.json(camera);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching camera', error: err });
    }
};

// Add a new camera
exports.createCamera = async (req, res) => {
    try {
        const newCamera = await Camera.create(req.body);
        res.status(201).json(newCamera);
    } catch (err) {
        res.status(500).json({ message: 'Error creating camera', error: err });
    }
};

// Update a camera by ID
exports.updateCamera = async (req, res) => {
    try {
        const camera = await Camera.findByPk(req.params.id);
        if (!camera) return res.status(404).json({ message: 'Camera not found' });
        
        const updatedCamera = await camera.update(req.body);
        res.json(updatedCamera);
    } catch (err) {
        res.status(500).json({ message: 'Error updating camera', error: err });
    }
};

// Delete a camera by ID
exports.deleteCamera = async (req, res) => {
    try {
        const camera = await Camera.findByPk(req.params.id);
        if (!camera) return res.status(404).json({ message: 'Camera not found' });

        await camera.destroy();
        res.json({ message: 'Camera deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting camera', error: err });
    }
};
